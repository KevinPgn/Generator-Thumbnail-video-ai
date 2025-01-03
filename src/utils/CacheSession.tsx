import { auth } from "@/lib/auth"

interface CachedSession {
    data: any;
    timestamp: number;
}

let sessionCache: CachedSession | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes en millisecondes

export async function getSession(forceRefresh = false) {
    // Si on force le rafraîchissement ou si le cache n'existe pas
    if (forceRefresh || !sessionCache) {
        const session = await auth();
        sessionCache = {
            data: session,
            timestamp: Date.now()
        };
        return session;
    }

    // Si le cache a expiré
    if (Date.now() - sessionCache.timestamp > CACHE_DURATION) {
        const session = await auth();
        sessionCache = {
            data: session,
            timestamp: Date.now()
        };
        return session;
    }

    // Retourner les données en cache
    return sessionCache.data;
}

export function clearSessionCache() {
    sessionCache = null;
}
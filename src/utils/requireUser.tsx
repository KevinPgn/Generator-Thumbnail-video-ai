import { getSession } from "./CacheSession";
import { redirect } from "next/navigation";

export const requireUser = async () => {
    const session = await getSession();

    const user = session.user;

    if (!user) {
        redirect("/api/auth/signin");
    }

    return user
}
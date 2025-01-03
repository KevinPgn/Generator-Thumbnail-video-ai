import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RoughNotation } from "react-rough-notation";
import { getSession } from "@/utils/CacheSession";
import { SignInButton } from "@/features/auth/SignInButton";
import { Video } from "lucide-react";

export async function Navbar() {
  const session = await getSession();

  return (
    <nav className="w-full border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo à gauche */}
          <Link href="/" className="flex items-center space-x-2">
            <Video className="h-8 w-8 text-red-500" /> {/* Icône vidéo */}
            <RoughNotation
              type="underline"
              show={true}
              color="#ef4444"
              strokeWidth={2}
              padding={2}
            >
              <span className="text-xl font-bold text-red-500">
                ThumbsGenerator
              </span>
            </RoughNotation>
          </Link>

          {/* Boutons à droite */}
          <div className="flex items-center space-x-4">
            {session ? (
              <Button
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
              >
                <Link href="/api/auth/signout">Sign Out</Link>
              </Button>
            ) : (
              <>
                <SignInButton />
                <Button
                  className="bg-red-500 text-white hover:bg-red-600 transition-colors"
                >
                  <Link href="/api/auth/signin">Start for free</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
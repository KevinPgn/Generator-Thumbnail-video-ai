import Link from "next/link";
import { getSession } from "@/utils/CacheSession";

export async function NavbarDash() {
  const session = await getSession();
  
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
      {/* Left section with logo */}
      <div className="flex items-center gap-2">
        <Link href="/" className="text-xl font-bold">
        ThumbsGenerator
        </Link>
      </div>

      {/* Center section with text input */}

      {/* Right section with actions */}
      <div className="flex items-center gap-4 px-5">
        {/* Generation count */}
        <div className="text-sm text-gray-600">
          <span>4 generations left</span>
          <Link 
            href="/pricing" 
            className="ml-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            Upgrade
          </Link>
        </div>

        {/* User profile button */}
        <div className="h-10 w-10">
          <img src={session?.user?.image || ""} alt="User profile" className="rounded-full cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

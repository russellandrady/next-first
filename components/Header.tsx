// Header.tsx (Server Component)
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { auth } from "@/auth";
import HeaderClient from "./HeaderClient";

export default async function Header() {
  const session = await auth();

  return (
    <header className="grid grid-cols-2 justify-between m-4 h-8">
      <div className="flex items-center justify-start space-x-2">
        <Image src="/logo.png" alt="Logo" width={24} height={24} />
        <span>Task Manager</span>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <HeaderClient session={session} />
      </div>
    </header>
  );
}

// Header.tsx (Server Component)
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { auth } from "@/auth";
import HeaderClient from "./HeaderClient";

export default async function Header() {
  const session = await auth();

  return (
    <header className="grid grid-cols-2 justify-between m-4 h-8">
      <div className="flex items-center justify-start gap-2">
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
        <span>Task Manager</span>
      </div>
      <HeaderClient session={session} />
    </header>
  );
}

"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MainButton } from "./MainButton";
import { LogOut } from "lucide-react";
import { signIn, signOut } from "next-auth/react";

export default function HeaderClient({ session }: { session: any }) {
  return (
    <div className="flex items-center justify-end gap-2">
      {session?.user ? (
        <>
          <Avatar>
            <AvatarImage
              width={32}
              height={32}
              src={session.user.image || "/github.png"}
            />
            <AvatarFallback>
              {session.user.name?.charAt(0).toUpperCase() || "?"}
            </AvatarFallback>
          </Avatar>
          <MainButton
            icon={<LogOut className="h-4 w-4 text-content-light" />}
            onClick={() => signOut()}
          />
        </>
      ) : (
        <MainButton
          icon={
            <Image
              src="/github.png"
              alt="GitHub"
              width={16}
              height={16}
              className="h-4 w-4"
            />
          }
          onClick={() => signIn("github")}
        />
      )}
    </div>
  );
}

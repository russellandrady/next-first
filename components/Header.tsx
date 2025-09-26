import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Header() {
  return (
    <>
      <header className="grid grid-cols-2 justify-between m-4 h-8">
        <div className="flex items-center justify-start gap-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span>Task Manager</span>
        </div>
        <div className="flex items-center justify-end">
          <Avatar>
            <AvatarImage
              width={32}
              height={32}
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <hr className="border-border-light" />
    </>
  );
}

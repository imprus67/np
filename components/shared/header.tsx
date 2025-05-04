import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { Button } from "../ui";
import { CartButton, Container, SearchInput } from ".";
import { User } from "lucide-react";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border-b border-b-slate-300", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Left Part of header*/}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>
        <div className="mx-10 flex-1">
          <SearchInput />
        </div>
        {/* Right Part of header*/}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Войти
          </Button>
          <CartButton />
          <div></div>
        </div>
      </Container>
    </header>
  );
};

"use client";
import { cn } from "@/lib/utils";
import { prisma } from "@/prisma/prisma-client";
import { useCatgoryStore } from "@/store/category";
import { Category } from "@prisma/client";
import React from "react";

interface Props {
  items: Category[];
  className?: string;
}

export const Categories: React.FC<Props> = ({ className, items }) => {
  const categoryActiveId = useCatgoryStore((state) => state.activeId);
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-200 p-1 rounded-2xl", className)}
    >
      {items.map(({ name, id }, index) => (
        <a
          className={cn(
            "flex items center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === id &&
              "bg-white text-primary shadow-[0px_0px_19px_-12px_rgba(0,_0,_0,_0.8)]",
          )}
          href={`/#${name}`}
          key={index}
        >
          <button className={cn("cursor-pointer", className)}>{name}</button>
        </a>
      ))}
    </div>
  );
};

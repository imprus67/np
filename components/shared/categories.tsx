"use client";
import { cn } from "@/lib/utils";
import { useCatgoryStore } from "@/store/category";
import React from "react";

interface Props {
  className?: string;
}

const cats = [
  "Пиццы",
  "Комбо",
  "Закуски",
  "Коктейли",
  "Кофе",
  "Напитки",
  "Десерты",
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCatgoryStore((state) => state.activeId);
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-200 p-1 rounded-2xl", className)}
    >
      {cats.map((cat, index) => (
        <a
          className={cn(
            "flex items center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === index &&
              "bg-white text-primary shadow-[0px_0px_19px_-12px_rgba(0,_0,_0,_0.8)]",
          )}
          key={index}
        >
          <button className={cn("cursor-pointer", className)}>{cat}</button>
        </a>
      ))}
    </div>
  );
};

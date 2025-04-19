"use client";
import { cn } from "@/lib/utils";
import { useCatgoryStore } from "@/store/category";
import React from "react";

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: "Пиццы" },
  { id: 2, name: "Комбо" },
  { id: 3, name: "Закуски" },
  { id: 4, name: "Коктейли" },
  { id: 5, name: "Кофе" },
  { id: 6, name: "Напитки" },
  { id: 7, name: "Десерты" },
  { id: 8, name: "Десерты" },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCatgoryStore((state) => state.activeId);
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-200 p-1 rounded-2xl", className)}
    >
      {cats.map(({ name, id }, index) => (
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

"use client";
import { cn } from "@/lib/utils";
import { useIntersection } from "react-use";
import { Title } from "./title";
import { ProductCard } from "./pruduct-card";
import React from "react";
import { useCatgoryStore } from "@/store/category";

interface Props {
  title: string;
  items: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

export const ProductsListGroup: React.FC<Props> = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}) => {
  const setActiveCategoryId = useCatgoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef<HTMLDivElement>(null);
  const intersection = useIntersection(
    intersectionRef as React.RefObject<HTMLElement>,
    {
      threshold: 0.4,
    },
  );
  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting, title, categoryId]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};

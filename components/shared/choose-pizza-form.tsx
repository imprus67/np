import { cn } from "@/lib/utils";
import React from "react";
import { ProductImage } from "./product-image";
import { Title } from "./title";
import { Button } from "../ui";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: any[];
  items: any[];
  // loading?: boolean;
  // onSubmit: (itemId: number, ingredients: number[]) => void;
  className?: string;
  onClickAdd?: VoidFunction;
}
export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  className,
  onClickAdd,
  ingredients,
}) => {
  const textDetails = "`30см, тесто тонкое, 590 г";
  const totalPrice = 790;
  return (
    <div className={cn(className, "flex flex-1")}>
      <ProductImage imageUrl={imageUrl} size={20} />
      <div className="w-[490px] bg-[#F7F6F5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full">
          {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};

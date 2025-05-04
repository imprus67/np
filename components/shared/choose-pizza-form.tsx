"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { PizzaImage } from "./pizza-image";
import { GroupVariants } from "./group-variants";
import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";
import { IngredientItem } from "./ingredient-item";
import { useSet } from "react-use";
import { calcTotalPizzaPrice, getAvailablePizzaSizes } from "@/lib";
import { usePizzaOptions } from "@/hooks";
import { getPizzaDetails } from "@/lib/get-pizza-details";
// import { ProductWithRelations } from "@/@types/prisma";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  // items: ProductWithRelations["items"];
  items: ProductItem[];
  // loading?: boolean;
  // onSubmit: (itemId: number, ingredients: number[]) => void;
  className?: string;
  onClickAddCart?: VoidFunction;
}
export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  className,
  onClickAddCart,
  ingredients,
}) => {
  const {
    size,
    type,
    selectedIngredients,
    availableSizes,
    currentItemId,
    setSize,
    setType,
    addIngredient,
  } = usePizzaOptions(items);
  const { totalPrice, textDetails } = getPizzaDetails(
    type,
    size,
    items,
    ingredients,
    selectedIngredients,
  );
  const availablePizzasSizes = getAvailablePizzaSizes(type, items);

  const handleClickAdd = () => {
    onClickAddCart?.();
  };

  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage imageUrl={imageUrl} size={size} />
      <div className="w-[490px] bg-[#F7F6F5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <div className="flex flex-col gap-3 mt-3">
          <GroupVariants
            items={availablePizzasSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>
        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar">
          <div className="grid grid-cols-3 gap-3 mt-5">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>
        <Button
          onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};

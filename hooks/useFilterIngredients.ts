import { Api } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import React from "react";
import { useSet } from "react-use";

type IngredientItem = Pick<Ingredient, "id" | "name">;

interface ReturnProps {
  ingredients: IngredientItem[];
  loading: boolean;
  selectedIngredients: Set<string>;
  onAddId: (id: string) => void;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}
export const useFilterIngredients = (values: string[]): ReturnProps => {
  const [ingredients, setIngredients] = React.useState<
    ReturnProps["ingredients"]
  >([]);
  const [price, setPrice] = React.useState<PriceProps>({
    priceFrom: 0,
    priceTo: 5000,
  });
  const [loading, setLoading] = React.useState(true);
  const [selectedIds, { toggle }] = useSet(new Set<string>([]));

  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();
        setIngredients(
          ingredients.map((ingr) => {
            return { id: ingr.id, name: ingr.name };
          }),
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchIngredients();
  }, []);

  /* const setSelectedIngredients = (ids: string[]) => {
    ids.forEach((id) => {
      if (selectedIds.has(id)) {
        return;
      } else {
        selectedIds.add(id);
      }
    });
  };
*/
  return {
    ingredients,
    loading,
    onAddId: toggle,
    selectedIngredients: selectedIds,
    // setSelectedIngredients
  };
};

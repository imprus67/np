"use client";
import { useRouter } from "next/navigation";
import { ProductWithRelations } from "@/@types/prisma";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ChooseProductForm } from "../choose-product-form";
import { ChoosePizzaForm } from "../choose-pizza-form";
interface Props {
  product: ProductWithRelations;
  className?: string;
}
export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  const isPizzaForm = Boolean(product.items[0].pizzaType);

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogTitle>{product.name}</DialogTitle>
      <DialogContent
        className={cn(
          "p-0 w-5xl max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className,
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            ingredients={product.ingredients}
            name={product.name}
            items={product.items}
            className={className}
          />
        ) : (
          <ChooseProductForm imageUrl={product.imageUrl} name={product.name} />
        )}
        {/* <ProductForm product={product} onSubmit={() => router.back()} /> */}
      </DialogContent>
    </Dialog>
  );
};

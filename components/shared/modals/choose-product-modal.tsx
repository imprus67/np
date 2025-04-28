"use client";
import { useRouter } from "next/navigation";
import { ProductWithRelations } from "@/@types/prisma";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ProductForm } from "../product-form";
import { ChoosePizzaForm } from "../choose-pizza-form";
interface Props {
  product: ProductWithRelations;
  className?: string;
}
export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogTitle>{product.name}</DialogTitle>
      <DialogContent
        className={cn(
          "p-0 w-5xl max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className,
        )}
      >
        <ChoosePizzaForm
          imageUrl={product.imageUrl}
          ingredients={product.ingredients}
          name={product.name}
          items={product.items}
          className={className}
        />
        {/* <ProductForm product={product} onSubmit={() => router.back()} /> */}
      </DialogContent>
    </Dialog>
  );
};

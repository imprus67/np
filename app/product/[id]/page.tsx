import { prisma } from "@/prisma/prisma-client";
import { Container, ProductImage } from "@/components/shared";
import { notFound } from "next/navigation";
import { Title } from "@/components/shared/title";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <ProductImage imageUrl={product.imageUrl} size={40} />
        <div className="w-[490px] bg-[#FCFCFC] p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />
          <p className="text-gray-400">
            {
              "loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem "
            }
          </p>
        </div>
      </div>
    </Container>
  );
}

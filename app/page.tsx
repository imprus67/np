import {
  Container,
  Filters,
  ProductsListGroup,
  SortPopup,
  TopBar,
} from "@/components/shared";
import { ProductCard } from "@/components/shared/pruduct-card";
import { Title } from "@/components/shared/title";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          {/*Фильтрация*/}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*Список товаров*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsListGroup
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsListGroup
                title="Завтраки"
                items={[
                  {
                    id: 1,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
              <ProductsListGroup
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер Пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={3}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

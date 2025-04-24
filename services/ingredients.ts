import { axiosInstance } from "./instance-axios";
import { ApiRoutes } from "./constants";
import { Ingredient } from "@prisma/client";

export const getAll = async (): Promise<Ingredient[]> => {
  const { data } = await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS);

  return data;
  // return (await axiosInstance.get<Product>('/products/search', {params: {query: query}})).data;
};

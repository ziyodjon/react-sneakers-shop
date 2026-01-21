import type { Product } from "./types";

export type ProductsResponse = {
  products: Product[];
  total: number;
};

export const fetchProducts = async (
  page = 0,
  limit = 12,
): Promise<ProductsResponse> => {
  const skip = page * limit;
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
  );

  return res.json();
};

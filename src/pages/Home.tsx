import { useEffect, useState } from "react";
import { Container } from "../widgets/Container";
import { PageTitle } from "../widgets/PageTitle";
import type { Product } from "../entities/product/types";
import { fetchProducts } from "../entities/product/api";
import { ProductCard } from "../widgets/ProductCard";

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data.products);
      setLoading(false);
    });
  }, []);

  const toggleCart = (id: number) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  if (loading)
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );

  return (
    <>
      <Container className="pb-[30px]">
        <div className="flex justify-between items-center mb-5">
          <PageTitle>Все кроссовки</PageTitle>
          <input
            type="text"
            placeholder="Search"
            className="border-1 outline-none rounded-[5px] border-[#F3F3F3] p-1 text-[#C4C4C4]"
          />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard
                key={product.id}
                product={product}
                isAdded={cart.includes(product.id)}
                isFavorite={favorites.includes(product.id)}
                onAdd={toggleCart}
                onToggleFavorite={toggleFavorite}
              />
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

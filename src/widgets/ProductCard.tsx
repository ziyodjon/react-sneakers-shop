import { Check, Heart, Plus } from "lucide-react";
import type { Product } from "../entities/product/types";
import { useCartStore } from "../features/cart/store";

interface Props {
  product: Product;
  isAdded: boolean;
  isFavorite: boolean;
  onAdd: (id: number) => void;
  onToggleFavorite: (id: number) => void;
}

export const ProductCard = ({
  product,
  isFavorite,
  onToggleFavorite,
}: Props) => {
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const items = useCartStore((state) => state.items);

  const isAdded = items.some((item) => item.id === product.id);
  return (
    <div className="relative  h-[260px] rounded-3xl bg-white p-6 shadow-sm hover:shadow-md transition">
      <button
        onClick={() => onToggleFavorite(product.id)}
        className={`absolute left-6 top-6 flex h-8 w-8 items-center justify-center rounded-lg  ${isFavorite ? "bg-[#FEF0F0]" : "bg-gray-100 hover:bg-[#FEF0F0]"} cursor-pointer `}
      >
        {isFavorite ? (
          <Heart color="#FF8585" fill="#FF8585" size={20} />
        ) : (
          <Heart color="#ccc" size={20} />
        )}
      </button>

      <img
        src={product.thumbnail}
        alt={product.title}
        className="mx-auto mb-4 h-[112px] object-contain"
      />

      <h3 className="mb-2 text-sm leading-tight">{product.title}</h3>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs text-gray-400">ЦЕНА:</span>
          <p className="text-sm font-bold">{product.price} $</p>
        </div>

        <button
          onClick={() => {
            if (isAdded) {
              removeItem(product.id);
            } else {
              addItem(product);
            }
          }}
          className={`flex h-8 w-8 items-center justify-center rounded-lg border cursor-pointer
            ${
              isAdded
                ? "bg-green-500 text-white border-green-500"
                : "border-gray-300 hover:bg-gray-100"
            }`}
        >
          {isAdded ? <Check size={20} /> : <Plus size={20} />}
        </button>
      </div>
    </div>
  );
};

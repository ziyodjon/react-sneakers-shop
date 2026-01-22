import type { Product } from "../../entities/product/types";
import { useCartStore } from "./store";

interface Props {
  items: Product[];
}

export const CartDrawer = ({ items }: Props) => {
  const total = items.reduce((sum, i) => sum + i.price, 0);
  const tax = Math.round(total * 0.05);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <aside className="fixed right-0 top-0 h-full w-[385px] bg-white p-6 shadow-xl z-50">
      <h2 className="mb-6 text-2xl font-bold">Корзина</h2>

      <div className="space-y-4 overflow-scroll h-[700px]">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 rounded-xl border p-4"
          >
            <img src={item.thumbnail} className="h-16 w-16" />
            <div className="flex-1">
              <p className="text-sm">{item.title}</p>
              <b>{item.price.toLocaleString()} $</b>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="h-8 w-8 rounded-lg border text-gray-400 hover:bg-gray-100 cursor-pointer hover:bg-red-300 hover:text-white"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-3">
        <div className="flex justify-between">
          <span>Итого:</span>
          <b>{total.toLocaleString()} $</b>
        </div>
        <div className="flex justify-between">
          <span>Налог 5%:</span>
          <b>{tax.toLocaleString()} $</b>
        </div>

        <button className="mt-4 w-full rounded-xl bg-lime-400 py-4 font-semibold text-white hover:bg-lime-500">
          Оформить заказ →
        </button>
      </div>
    </aside>
  );
};

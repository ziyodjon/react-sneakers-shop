import type { Product } from "../../entities/product/types";

interface Props {
  items: Product[];
  onRemove: (id: number) => void;
}

export const CartDrawer = ({ items, onRemove }: Props) => {
  const total = items.reduce((sum, i) => sum + i.price, 0);
  const tax = Math.round(total * 0.05);

  return (
    <aside className="fixed right-0 top-0 h-full w-[385px] bg-white p-6 shadow-xl z-50">
      <h2 className="mb-6 text-2xl font-bold">Корзина</h2>

      <div className="space-y-4">
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
              onClick={() => onRemove(item.id)}
              className="h-8 w-8 rounded-lg border text-gray-400 hover:bg-gray-100"
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

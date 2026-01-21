import { Heart, ShoppingCart, UserCircle } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "../features/cart/store";
import { CartDrawer } from "../features/cart/cartDrawer";

export const Navs = () => {
  const [open, setOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  );
  return (
    <>
      <ul className="flex gap-4">
        <li
          className="flex gap-1 items-center"
          onClick={() => setOpen((prev) => !prev)}
        >
          <ShoppingCart /> <span className="text-[#5C5C5C]">{total}</span>
        </li>
        <li className="flex gap-1 items-center">
          <Heart /> <span className="text-[#5C5C5C]">Закладки</span>
        </li>
        <li className="flex gap-1 items-center">
          <UserCircle /> <span className="text-[#5C5C5C]">Профиль</span>
        </li>
      </ul>

      {open && <CartDrawer items={items} onRemove={() => setOpen(false)} />}
    </>
  );
};

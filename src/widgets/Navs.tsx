import { Heart, ShoppingCart, UserCircle } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "../features/cart/store";
import { CartDrawer } from "../features/cart/CartDrawer";

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
          className="flex gap-1 items-center cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          <ShoppingCart color="#5C5C5C" />{" "}
          <span className="text-[#5C5C5C] font-bold">{total.toFixed(2)}</span>
        </li>

        <li className="flex gap-1 items-center">
          <Heart color="#5C5C5C" size={20} />{" "}
          <span className="text-[#5C5C5C]">Закладки</span>
        </li>
        <li className="flex gap-1 items-center">
          <UserCircle color="#5C5C5C" size={20} />{" "}
          <span className="text-[#5C5C5C]">Профиль</span>
        </li>
      </ul>

      {open && <CartDrawer items={items} />}
    </>
  );
};

// const NavItem = ({ onClick, text, icon }) => {
//   return (
//     <li
//       className={`flex gap-1 items-center ${onClick != null ? "cursor-pointer" : ""}`}
//       onClick={onClick}
//     >
//       {icon}
//       <span className="text-[#5C5C5C] font-bold">{text}</span>
//     </li>
//   );
// };

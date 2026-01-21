import { Logo } from "./Logo";
import { Navs } from "./Navs";

export const Header = () => {
  return (
    <div className="flex items-center justify-between p-[40px]">
      <Logo />
      <Navs />
    </div>
  );
};

import type { ReactNode } from "react";

export type Props = {
  children: ReactNode;
};
export const PageTitle = ({ children }: Props) => {
  return <h1 className="font-bold text-[24px]">{children}</h1>;
};

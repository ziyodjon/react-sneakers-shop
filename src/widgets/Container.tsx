import type { ReactNode } from "react";

export type Props = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  return <div className={`px-[44px] ${className}`}>{children}</div>;
};

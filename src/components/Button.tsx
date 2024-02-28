import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-yellow py-[8px] px-[16px] text-white uppercase font-light rounded">
      {children}
    </button>
  );
}

import { ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
	href: string;
};

export default function Button({ children, href }: ButtonProps) {
	return (
		<a href={href} className="cursor-pointer bg-yellow py-[8px] px-[16px] text-white uppercase font-semibold rounded hover:bg-yellowHover transition-colors">
			{children}
		</a>
	);
}

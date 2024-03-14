import { ReactNode } from "react";

type FullPageProps = {
	children: ReactNode;
};

export default function FullPage({ children }: FullPageProps) {
	return <div className="h-screen">{children}</div>;
}

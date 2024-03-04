import type { Metadata } from "next";
import { Source_Sans_3, Libre_Bodoni } from "next/font/google";
import "./globals.css";

const sourceSans3 = Source_Sans_3({ subsets: ["latin"] });
const bodoni = Libre_Bodoni({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Osada Malina",
	description: "Osada Malina",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body className={sourceSans3.className + bodoni.className + "scroll-smooth"}>{children}</body>
		</html>
	);
}

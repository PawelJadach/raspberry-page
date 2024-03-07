import Image from "next/image";
import React from "react";

type AttractionProps = {
	text: string;
	icon: string;
};

export default function Attraction({ text, icon }: AttractionProps) {
	return (
		<>
			<Image src={icon} alt={text} width={72} height={64} />
			<h3 className="text-center">{text}</h3>
		</>
	);
}

"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { animation } from "@/animations/animations";

type AttractionProps = {
	text: string;
	icon: string;
	index: number;
};

export default function Attraction({ text, icon, index }: AttractionProps) {
	return (
		<motion.div variants={animation.multiple.fromLeft(index)} initial="initial" viewport={{ once: true }} whileInView="animate" className="flex flex-col justify-center items-center gap-6" key={text}>
			<Image src={icon} alt={text} width={72} height={64} />
			<h3 className="text-center">{text}</h3>
		</motion.div>
	);
}

"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { animation, viewport } from "@/animations/animations";

type FacilitieProps = {
	src: string;
	alt: string;
	text: string;
	index: number;
};

export default function Facilitie({ src, alt, text, index }: FacilitieProps) {
	return (
		<motion.div variants={animation.multiple.opacityAndScale(index)} initial="initial" viewport={viewport} whileInView="animate" className="bg-slate-600 relative">
			<Image fill style={{ objectFit: "cover", mixBlendMode: "multiply" }} src={src} alt={alt} />
			<h3 className="absolute text-white md:text-2xl tracking-widest text-center left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] uppercase">{text}</h3>
		</motion.div>
	);
}

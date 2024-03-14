"use client";
import React from "react";
import { motion } from "framer-motion";
import { animation, viewport } from "@/animations/animations";

type SectionHeaderProps = {
	header: string;
	subheader: string;
};

export default function SectionHeader({ header, subheader }: SectionHeaderProps) {
	return (
		<div className="flex flex-col justify-center">
			<motion.h1 variants={animation.fromTop(0.2)} initial="initial" whileInView="animate" viewport={viewport} className="font-serif text-4xl md:text-8xl uppercase text-center whitespace-normal md:whitespace-nowrap tracking-wide">
				{header}
			</motion.h1>
			<motion.h2 variants={animation.fromTop(0.4)} initial="initial" whileInView="animate" viewport={viewport} className="text-[16px] uppercase text-center whitespace-normal md:whitespace-nowrap tracking-wide mt-2">
				{subheader}
			</motion.h2>
			<motion.div variants={animation.fromRight(0.5)} initial="initial" whileInView="animate" viewport={viewport} className="w-[120px] h-[1px] bg-yellow mx-auto mt-8" />
		</div>
	);
}

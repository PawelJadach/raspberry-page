"use client";
import React from "react";
import { motion } from "framer-motion";

type SectionHeaderProps = {
	header: string;
	subheader: string;
};

export default function SectionHeader({ header, subheader }: SectionHeaderProps) {
	return (
		<div className="flex flex-col justify-center">
			<motion.h1
				initial={{ translateY: 100, opacity: 0 }}
				whileInView={{ translateY: 0, opacity: 1 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 20,
					delay: 0.6,
				}}
				viewport={{ once: true }}
				className="font-serif text-6xl md:text-8xl uppercase text-center whitespace-normal md:whitespace-nowrap tracking-wide"
			>
				{header}
			</motion.h1>
			<motion.h2
				initial={{ translateY: 100, opacity: 0 }}
				whileInView={{ translateY: 0, opacity: 1 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 20,
					delay: 0.8,
				}}
				viewport={{ once: true }}
				className="text-[16px] uppercase text-center whitespace-normal md:whitespace-nowrap tracking-wide mt-2"
			>
				{subheader}
			</motion.h2>
			<motion.div
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 20,
					delay: 1,
				}}
				viewport={{ once: true }}
				initial={{ translateX: 500, opacity: 0 }}
				whileInView={{ translateX: 0, opacity: 1 }}
				className="w-[120px] h-[1px] bg-yellow mx-auto mt-8"
			/>
		</div>
	);
}

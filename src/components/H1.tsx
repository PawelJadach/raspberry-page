"use client";
import React from "react";
import { motion } from "framer-motion";

type H1Props = {
	text: string;
};

export default function H1({ text }: H1Props) {
	return (
		<motion.h1
			initial={{ translateY: 100, opacity: 0 }}
			animate={{ translateY: 0, opacity: 1 }}
			transition={{
				type: "spring",
				stiffness: 100,
				damping: 20,
				delay: 0.6,
			}}
			className="font-serif text-6xl md:text-8xl uppercase text-center whitespace-normal md:whitespace-nowrap tracking-wide"
		>
			{text}
		</motion.h1>
	);
}

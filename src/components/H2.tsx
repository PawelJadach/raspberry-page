"use client";
import React from "react";
import { motion } from "framer-motion";

type H2Props = {
	text: string;
};

export default function H2({ text }: H2Props) {
	return (
		<motion.h2
			initial={{ translateY: 100, opacity: 0 }}
			animate={{ translateY: 0, opacity: 1 }}
			transition={{
				type: "spring",
				stiffness: 100,
				damping: 20,
				delay: 0.6,
			}}
			className="text-xl md:text-xl uppercase text-center whitespace-normal md:whitespace-nowrap tracking-wide"
		>
			{text}
		</motion.h2>
	);
}

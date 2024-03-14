"use client";
import React from "react";
import { motion } from "framer-motion";
import { hero } from "@/data/data";

export default function HeroHeader() {
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
			viewport={{ once: true }}
			className="font-serif text-6xl md:text-8xl uppercase text-center whitespace-normal md:whitespace-nowrap tracking-wide"
		>
			{hero.header}
		</motion.h1>
	);
}

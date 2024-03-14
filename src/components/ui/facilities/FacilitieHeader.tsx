"use client";
import React from "react";
import { motion } from "framer-motion";
import { animation, viewport } from "@/animations/animations";

type FacilitieHeaderProps = {
	text: string;
};

export default function FacilitieHeader({ text }: FacilitieHeaderProps) {
	return (
		<motion.h3 variants={animation.fromRight(1)} initial="initial" whileInView="animate" viewport={viewport} className="text-center mt-16 text-2xl">
			{text}
		</motion.h3>
	);
}

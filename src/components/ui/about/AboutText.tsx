"use client";
import React from "react";
import { motion } from "framer-motion";
import { animation, viewport } from "@/animations/animations";
import { about } from "@/data/data";

export default function AboutText() {
	return (
		<motion.p viewport={viewport} variants={animation.opacity(0.8)} initial="initial" whileInView="animate" className="max-w-[600px] text-center mx-auto mt-[32px]">
			{about.text}
		</motion.p>
	);
}

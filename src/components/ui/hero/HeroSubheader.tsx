"use client";
import React from "react";
import { motion } from "framer-motion";
import { animation } from "@/animations/animations";
import { hero } from "@/data/data";

export default function HeroSubheader() {
	return (
		<motion.h2 variants={animation.fromTop(0.7)} animate="animate" initial="initial" className="text-[24px] font-semibold tracking-widest uppercase">
			{hero.subheader}
		</motion.h2>
	);
}

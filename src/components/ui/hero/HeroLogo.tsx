"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { animation } from "@/animations/animations";

export default function HeroLogo() {
	return (
		<motion.div variants={animation.scale()} initial="initial" animate="animate">
			<Image width={217} height={114} src="/logo-full.svg" alt="Logo" />
		</motion.div>
	);
}

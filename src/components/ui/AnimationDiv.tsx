"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { animation } from "@/animations/animations";

type AnimationDivProps = {
	children: ReactNode | ReactNode[];
	delay?: number;
	className?: string;
};

export default function AnimationDiv({ children, delay = 0, className = "" }: AnimationDivProps) {
	return (
		<motion.div className={className} variants={animation.fromTop(delay)} initial="initial" animate="animate">
			{children}
		</motion.div>
	);
}

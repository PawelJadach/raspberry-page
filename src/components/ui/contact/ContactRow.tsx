"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { animation, viewport } from "@/animations/animations";

type ContactRowProps = {
	index: number;
	icon: ReactNode;
	text: string;
};

export default function ContactRow({ index, icon, text }: ContactRowProps) {
	return (
		<motion.p whileHover={{ scale: 1.2 }} variants={animation.multiple.fromLeft(index)} initial="initial" viewport={viewport} whileInView="animate" className="flex gap-4">
			{icon}
			<span>{text}</span>
		</motion.p>
	);
}

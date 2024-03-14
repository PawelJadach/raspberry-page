"use client";
import React from "react";
import { motion } from "framer-motion";
import { hero } from "@/data/data";
import { animation } from "@/animations/animations";

export default function Navigation() {
	return (
		<nav className="mt-[32px]">
			<motion.ul variants={animation.fromTop(0.5)} initial="initial" animate="animate" className="flex gap-[16px] text-base overflow-hidden">
				{hero.navigation.links.map((link) => (
					<li key={link.href}>
						<a href={link.href}>{link.label}</a>
					</li>
				))}
			</motion.ul>
		</nav>
	);
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { hero } from "@/data/data";

export default function HeroBackgroundImage() {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Image alt={hero.image.alt} style={{ objectFit: "cover" }} fill={true} src={hero.image.src} />
		</motion.div>
	);
}

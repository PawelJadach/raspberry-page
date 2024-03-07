"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { data } from "@/data/data";
import { motion } from "framer-motion";

export default function About() {
	return (
		<div className="px-2 py-20 md:p-32">
			<SectionHeader header="O nas" subheader="TROCHĘ O NAS, DOMKACH I NASZEJ OSADZIE" />
			<motion.p
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 20,
					delay: 1.2,
				}}
				viewport={{ once: true }}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				className="max-w-[600px] text-center mx-auto mt-[32px]"
			>
				{data.about.text}
			</motion.p>
		</div>
	);
}

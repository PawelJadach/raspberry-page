"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { data } from "@/data/data";
import { motion } from "framer-motion";
import Attraction from "./Attraction";

const item = {
	visible: (i: number) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: i * 0.2,
			ease: "easeOut",
			duration: 1,
		},
	}),
	hidden: { opacity: 0, x: -100 },
};

export default function Attractions() {
	return (
		<div className="px-2 py-20 md:p-32 bg-[#F4F4F4]" id="attractions">
			<SectionHeader header="Atrakcje" subheader="W pobliżu znajdują się" />
			<div className="max-w-[1084px] mt-20 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-12">
				{data.attractions.list.map(({ icon, text }, i) => (
					<motion.div custom={i} variants={item} initial="hidden" viewport={{ once: true }} whileInView="visible" className="flex flex-col justify-center items-center gap-6" key={text}>
						<Attraction icon={icon} text={text} />
					</motion.div>
				))}
			</div>
		</div>
	);
}

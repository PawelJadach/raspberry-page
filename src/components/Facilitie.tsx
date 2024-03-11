import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type FacilitieProps = {
	src: string;
	alt: string;
	text: string;
	custom: number;
};

const item = {
	visible: (i: number) => ({
		opacity: 1,
		scale: 1,
		transition: {
			delay: i * 0.2,
			ease: "easeOut",
			duration: 1,
		},
	}),
	hidden: { opacity: 0, scale: 0 },
};

export default function Facilitie({ src, alt, text, custom }: FacilitieProps) {
	return (
		<motion.div custom={custom} variants={item} initial="hidden" viewport={{ once: true }} whileInView="visible" className="bg-slate-600 relative">
			<Image fill style={{ objectFit: "cover", mixBlendMode: "multiply" }} src={src} alt={alt} />
			<h3 className="absolute text-white md:text-2xl tracking-widest text-center left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] uppercase">{text}</h3>
		</motion.div>
	);
}

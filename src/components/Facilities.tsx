"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import Facilitie from "./Facilitie";
import { motion } from "framer-motion";

const facilitiesData = {
	top: [
		{
			src: "/facilities/1-min.webp",
			text: "Narciarnia",
			alt: "Narciarnia",
		},
		{
			src: "/facilities/2-min.webp",
			text: "Plac zabaw dla dzieci",
			alt: "Plac zabaw dla dzieci",
		},
		{
			src: "/facilities/3-min.webp",
			text: "Duże tarasy z wyposażeniem",
			alt: "Duże tarasy z wyposażeniem",
		},
		{
			src: "/facilities/4-min.webp",
			text: "Prywatne balie ogrzewane drewnem",
			alt: "Prywatne balie ogrzewane drewnem",
		},
		{
			src: "/facilities/5-min.webp",
			text: "Duża wiata z paleniskiem",
			alt: "Duża wiata z paleniskiem",
		},
		{
			src: "/facilities/6-min.webp",
			text: "Prywatne grille oraz drewno do balii",
			alt: "Prywatne grille oraz drewno do balii",
		},
	],
	bottom: [
		{
			src: "/facilities/7-min.webp",
			text: "Taras z widokiem",
			alt: "Taras z widokiem",
		},
		{
			src: "/facilities/8-min.webp",
			text: "Zestaw ręczników i szlafroków",
			alt: "Zestaw ręczników i szlafroków",
		},
		{
			src: "/facilities/9-min.webp",
			text: "Płytę indukcyjną, pierkarnik i zmywarkę",
			alt: "Płytę indukcyjną, pierkarnik i zmywarkę",
		},
		{
			src: "/facilities/10-min.webp",
			text: "Smart TV z wifi",
			alt: "Smart TV z wifi",
		},
		{
			src: "/facilities/11-min.webp",
			text: "Kominek z drewnem na opał",
			alt: "Kominek z drewnem na opał",
		},
		{
			src: "/facilities/6-min.webp",
			text: "Ekspres do kawy na ziarna",
			alt: "Ekspres do kawy na ziarna",
		},
	],
};

export default function Facilities() {
	return (
		<div className="px-2 py-20 md:p-32" id="facilities">
			<SectionHeader header="Udogodnienia" subheader="Czekają na was..." />
			<motion.h3
				initial={{ translateX: 100, opacity: 0 }}
				whileInView={{ translateX: 0, opacity: 1 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 20,
					delay: 1,
				}}
				viewport={{ once: true }}
				className="text-center mt-16 text-2xl"
			>
				W NASZEJ OSADZIE CZEKAJĄ NA NASZYCH GOŚCI
			</motion.h3>
			<div className="mx-auto grid grid-cols-2 grird-rows-3 md:grid-cols-3 md:grid-rows-2 gap-2 h-[600px] justify-center mt-8  max-w-screen-lg">
				{facilitiesData.top.map((facilitie, index) => (
					<Facilitie custom={index} key={facilitie.alt} src={facilitie.src} text={facilitie.text} alt={facilitie.alt} />
				))}
			</div>
			<motion.h3
				initial={{ translateX: 100, opacity: 0 }}
				whileInView={{ translateX: 0, opacity: 1 }}
				transition={{
					type: "spring",
					stiffness: 100,
					damping: 20,
					delay: 1,
				}}
				viewport={{ once: true }}
				className="text-center mt-16 text-2xl"
			>
				W KAŻDYM DOMKU GOŚCIE MAJĄ DO DYSPOZYCJI
			</motion.h3>
			<div className="mx-auto grid grid-cols-2 grird-rows-3 md:grid-cols-3 md:grid-rows-2 gap-2 h-[600px] justify-center mt-8  max-w-screen-lg">
				{facilitiesData.bottom.map((facilitie, index) => (
					<Facilitie custom={index} key={facilitie.alt} src={facilitie.src} text={facilitie.text} alt={facilitie.alt} />
				))}
			</div>
		</div>
	);
}

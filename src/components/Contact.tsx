"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import SocialMediaIcons from "./SocialMediaIcons";

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

export default function Contact() {
	return (
		<div className="px-2 py-20 md:p-32 bg-[#F4F4F4]">
			<SectionHeader header="Kontakt" subheader="Pozostańmy w kontakcie..." />
			<div className="flex flex-col justify-center items-center mt-12 gap-8">
				<motion.p custom={0} variants={item} initial="hidden" viewport={{ once: true }} whileInView="visible" className="flex gap-4">
					<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M22.5 16.92V19.92C22.5011 20.1985 22.4441 20.4741 22.3325 20.7293C22.2209 20.9845 22.0573 21.2136 21.8521 21.4018C21.6469 21.5901 21.4046 21.7335 21.1408 21.8227C20.8769 21.9119 20.5974 21.945 20.32 21.92C17.2428 21.5856 14.287 20.5341 11.69 18.85C9.27383 17.3146 7.22534 15.2661 5.69 12.85C3.99998 10.2412 2.94824 7.27097 2.62 4.17997C2.59501 3.90344 2.62788 3.62474 2.7165 3.3616C2.80513 3.09846 2.94757 2.85666 3.13477 2.6516C3.32196 2.44653 3.54981 2.28268 3.80379 2.1705C4.05778 2.05831 4.33234 2.00024 4.61 1.99997H7.61C8.09531 1.9952 8.56579 2.16705 8.93376 2.48351C9.30173 2.79996 9.54208 3.23942 9.61 3.71997C9.73662 4.68004 9.97145 5.6227 10.31 6.52997C10.4445 6.8879 10.4737 7.27689 10.3939 7.65086C10.3142 8.02482 10.1289 8.36809 9.86 8.63998L8.59 9.90997C10.0136 12.4135 12.0865 14.4864 14.59 15.91L15.86 14.64C16.1319 14.3711 16.4752 14.1858 16.8491 14.1061C17.2231 14.0263 17.6121 14.0554 17.97 14.19C18.8773 14.5285 19.8199 14.7634 20.78 14.89C21.2658 14.9585 21.7094 15.2032 22.0265 15.5775C22.3437 15.9518 22.5122 16.4296 22.5 16.92Z"
							stroke="#D8AE5E"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path d="M14.55 2C16.5883 2.21477 18.4922 3.1188 19.9469 4.56258C21.4016 6.00636 22.3199 7.90341 22.55 9.94" stroke="#D8AE5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M14.55 6C15.5335 6.19394 16.436 6.67903 17.1404 7.39231C17.8447 8.10559 18.3184 9.01413 18.5 10" stroke="#D8AE5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
					<span>+48 664 769 936</span>
				</motion.p>
				<motion.p custom={1} variants={item} initial="hidden" viewport={{ once: true }} whileInView="visible" className="flex gap-4">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="#D8AE5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7" stroke="#D8AE5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>

					<span>miodmalina.istebna@gmail.com</span>
				</motion.p>
				<motion.p custom={2} variants={item} initial="hidden" viewport={{ once: true }} whileInView="visible" className="flex gap-4">
					<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M22.04 15H17.5C16.9696 15 16.4609 15.2107 16.0858 15.5858C15.7107 15.9609 15.5 16.4696 15.5 17V21.54" stroke="#D8AE5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path
							d="M7.5 3.33997V4.99997C7.5 5.79562 7.81607 6.55868 8.37868 7.12129C8.94129 7.6839 9.70435 7.99997 10.5 7.99997C11.0304 7.99997 11.5391 8.21068 11.9142 8.58575C12.2893 8.96083 12.5 9.46953 12.5 9.99997C12.5 11.1 13.4 12 14.5 12C15.0304 12 15.5391 11.7893 15.9142 11.4142C16.2893 11.0391 16.5 10.5304 16.5 9.99997C16.5 8.89997 17.4 7.99997 18.5 7.99997H21.67"
							stroke="#D8AE5E"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path d="M11.5 21.95V18C11.5 17.4696 11.2893 16.9609 10.9142 16.5858C10.5391 16.2107 10.0304 16 9.5 16C8.96957 16 8.46086 15.7893 8.08579 15.4142C7.71072 15.0391 7.5 14.5304 7.5 14V13C7.5 12.4696 7.28929 11.9609 6.91422 11.5858C6.53914 11.2107 6.03044 11 5.5 11H2.55" stroke="#D8AE5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" stroke="#D8AE5E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>

					<span>Jasnowice 2024, 43-470 Istebna</span>
				</motion.p>
				<SocialMediaIcons />
			</div>
		</div>
	);
}

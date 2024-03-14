import React from "react";
import SectionHeader from "./ui/SectionHeader";
import Facilitie from "./ui/facilities/Facilitie";
import FacilitieHeader from "./ui/facilities/FacilitieHeader";
import { facilities } from "@/data/data";

export default function Facilities() {
	const { top, bottom, header, subheader, title1, title2 } = facilities;
	const containerClass = "mx-auto grid grid-cols-2 grird-rows-3 md:grid-cols-3 md:grid-rows-2 gap-2 h-[600px] justify-center mt-8  max-w-screen-lg";

	return (
		<div className="px-2 py-20 md:p-32" id="facilities">
			<SectionHeader header={header} subheader={subheader} />
			<FacilitieHeader text={title1} />
			<div className={containerClass}>
				{top.map((facilitie, index) => (
					<Facilitie index={index} key={facilitie.alt} src={facilitie.src} text={facilitie.text} alt={facilitie.alt} />
				))}
			</div>
			<FacilitieHeader text={title2} />
			<div className={containerClass}>
				{bottom.map((facilitie, index) => (
					<Facilitie index={index} key={facilitie.alt} src={facilitie.src} text={facilitie.text} alt={facilitie.alt} />
				))}
			</div>
		</div>
	);
}

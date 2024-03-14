import React from "react";
import SectionHeader from "./ui/SectionHeader";
import { data } from "@/data/data";
import Attraction from "./ui/attractions/Attraction";

export default function Attractions() {
	return (
		<div className="px-2 py-20 md:p-32 bg-[#F4F4F4]" id="attractions">
			<SectionHeader header="Atrakcje" subheader="W pobliżu znajdują się" />
			<div className="max-w-[1084px] mt-20 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-12">
				{data.attractions.list.map(({ icon, text }, index) => (
					<Attraction key={text} icon={icon} text={text} index={index} />
				))}
			</div>
		</div>
	);
}

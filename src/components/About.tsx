import React from "react";
import SectionHeader from "./ui/SectionHeader";
import { about } from "@/data/data";
import AboutText from "./ui/about/AboutText";

export default function About() {
	const { header, subheader } = about;

	return (
		<div className="px-2 py-20 md:p-32" id="about">
			<SectionHeader header={header} subheader={subheader} />
			<AboutText />
		</div>
	);
}

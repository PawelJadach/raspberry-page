import React from "react";
import SocialMediaIcons from "./ui/SocialMediaIcons";
import AnimationDiv from "./ui/AnimationDiv";
import FooterLogo from "./ui/footer/FooterLogo";
import { footer } from "@/data/data";

export default function Footer() {
	const { text1, text2 } = footer;

	return (
		<footer className="py-10 md:p-12">
			<AnimationDiv className="flex flex-col justify-center items-center gap-8">
				<FooterLogo />
				<SocialMediaIcons />
				<p className="px-4 text-center">{text1}</p>
				<p>{text2}</p>
			</AnimationDiv>
		</footer>
	);
}

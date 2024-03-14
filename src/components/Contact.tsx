import React from "react";
import SectionHeader from "./ui/SectionHeader";
import SocialMediaIcons from "./ui/SocialMediaIcons";
import ContactRow from "./ui/contact/ContactRow";
import PhoneIcon from "./ui/contact/PhoneIcon";
import EmailIcon from "./ui/contact/EmailIcon";
import WorldIcon from "./ui/contact/WorldIcon";
import { contact } from "@/data/data";

export default function Contact() {
	const { header, subheader, phone, email, place } = contact;

	return (
		<div className="px-2 py-20 md:p-32 bg-[#F4F4F4]">
			<SectionHeader header={header} subheader={subheader} />
			<div className="flex flex-col justify-center items-center mt-12 gap-8">
				<ContactRow index={1} icon={<PhoneIcon />} text={phone} />
				<ContactRow index={2} icon={<EmailIcon />} text={email} />
				<ContactRow index={3} icon={<WorldIcon />} text={place} />
				<SocialMediaIcons />
			</div>
		</div>
	);
}

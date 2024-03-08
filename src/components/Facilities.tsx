"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

export default function Facilities() {
	return (
		<div className="px-2 py-20 md:p-32">
			<SectionHeader header="Udogodnienia" subheader="Czekają na was..." />
			<h3 className="text-center mt-16 text-2xl">W NASZEJ OSADZIE CZEKAJĄ NA NASZYCH GOŚCI</h3>
			<div className="mx-auto grid grid-cols-[291px_291px_408px] gap-2 h-[286px] justify-center mt-8">
				<div className="bg-slate-600 relative">
					<Image fill style={{ objectFit: "cover", mixBlendMode: "multiply" }} src="/facilities/1-min.webp" alt="Image" />
					<h3 className="absolute text-white text-2xl tracking-widest text-center left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] uppercase">Narciarnia</h3>
				</div>
				<div className="bg-slate-600 relative">
					<Image fill style={{ objectFit: "cover" }} src="/facilities/2-min.webp" alt="Image" />
				</div>
				<div className="bg-slate-600 relative">
					<Image fill style={{ objectFit: "cover" }} src="/facilities/3-min.webp" alt="Image" />
				</div>
			</div>
			<div className="mx-auto grid grid-cols-[408px_291px_291px] gap-2 h-[286px] justify-center mt-2">
				<div className="bg-slate-600 relative">
					<Image fill style={{ objectFit: "cover" }} src="/facilities/4-min.webp" alt="Image" />
				</div>
				<div className="bg-slate-600 relative">
					<Image fill style={{ objectFit: "cover" }} src="/facilities/5-min.webp" alt="Image" />
				</div>
				<div className="bg-slate-600 relative">
					<Image fill style={{ objectFit: "cover" }} src="/facilities/6-min.webp" alt="Image" />
				</div>
			</div>
			<h3 className="text-center mt-16 text-2xl">W KAŻDYM DOMKU GOŚCIE MAJĄ DO DYSPOZYCJI</h3>
			<div className="mx-auto grid grid-cols-[291px_291px_408px] gap-2 h-[286px] justify-center mt-8">
				<div className="bg-slate-600 relative">
					<Image fill style={{ objectFit: "cover" }} src="/facilities/7-min.webp" alt="Image" />
				</div>
				<div className="bg-slate-600 relative">
					<Image fill style={{ objectFit: "cover" }} src="/facilities/8-min.webp" alt="Image" />
				</div>
				<div className="bg-slate-600 relative">
					<Image fill style={{ objectFit: "cover" }} src="/facilities/9-min.webp" alt="Image" />
				</div>
			</div>
			<div className="mx-auto grid grid-cols-[408px_291px_291px] gap-2 h-[286px] justify-center mt-2">
				<div className="bg-slate-600 relative">
					<Image fill style={{ objectFit: "cover" }} src="/facilities/10-min.webp" alt="Image" />
				</div>
				<div className="bg-slate-600 relative">
					<Image fill style={{ objectFit: "cover" }} src="/facilities/11-min.webp" alt="Image" />
				</div>
				<div className="bg-slate-600 relative">
					<Image fill style={{ objectFit: "cover" }} src="/facilities/3-min.webp" alt="Image" />
				</div>
			</div>
		</div>
	);
}

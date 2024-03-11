import About from "@/components/About";
import Attractions from "@/components/Attractions";
import Cotnact from "@/components/Contact";
import Facilities from "@/components/Facilities";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Attractions />
			<Facilities />
			<Cotnact />
		</>
	);
}

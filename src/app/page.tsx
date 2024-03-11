import About from "@/components/About";
import Attractions from "@/components/Attractions";
import Contact from "@/components/Contact";
import Facilities from "@/components/Facilities";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Attractions />
			<Facilities />
			<Contact />
			<Footer />
		</>
	);
}

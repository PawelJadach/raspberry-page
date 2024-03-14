import Button from "./ui/Button";
import FullPage from "./ui/FullPage";
import HeroBackgroundImage from "./ui/hero/HeroBackgroundImage";
import Navigation from "./ui/hero/Navigation";
import HeroLogo from "./ui/hero/HeroLogo";
import HeroHeader from "./ui/hero/HeroHeader";
import HeroSubheader from "./ui/hero/HeroSubheader";
import AnimationDiv from "./ui/AnimationDiv";
import { hero } from "@/data/data";

export default function Hero() {
	return (
		<FullPage>
			<div className="bg-black h-screen relative">
				<HeroBackgroundImage />
				<div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full z-10 flex flex-col items-center text-white">
					<HeroLogo />
					<Navigation />
					<div className="mt-[128px] flex flex-col gap-[20px] items-center">
						<HeroHeader />
						<HeroSubheader />
						<AnimationDiv delay={0.8}>
							<Button href="#about">{hero.button}</Button>
						</AnimationDiv>
					</div>
				</div>
			</div>
		</FullPage>
	);
}

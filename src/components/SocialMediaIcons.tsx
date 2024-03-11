import React from "react";
import { motion } from "framer-motion";

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
	hidden: { opacity: 0, x: -200 },
};

export default function SocialMediaIcons() {
	return (
		<div className="flex gap-8 mt-8">
			<motion.svg custom={0} variants={item} initial="hidden" viewport={{ once: true }} whileInView="visible" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_14_4378)">
					<path
						d="M16 0C7.16352 0 0 7.16352 0 16C0 23.5034 5.16608 29.7997 12.135 31.529V20.8896H8.83584V16H12.135V13.8931C12.135 8.44736 14.5997 5.9232 19.9462 5.9232C20.96 5.9232 22.7091 6.12224 23.4246 6.32064V10.7526C23.047 10.713 22.391 10.6931 21.5763 10.6931C18.953 10.6931 17.9392 11.687 17.9392 14.2707V16H23.1654L22.2675 20.8896H17.9392V31.8829C25.8618 30.9261 32.0006 24.1805 32.0006 16C32 7.16352 24.8365 0 16 0Z"
						fill="#D8AE5E"
					/>
				</g>
				<defs>
					<clipPath id="clip0_14_4378">
						<rect width="32" height="32" fill="white" />
					</clipPath>
				</defs>
			</motion.svg>
			<motion.svg custom={1} variants={item} initial="hidden" viewport={{ once: true }} whileInView="visible" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_14_4364)">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M32 6.14422C32 2.75333 29.3064 0.000366211 25.9901 0.000366211H6.00987C2.69362 0.000366211 9.53674e-07 2.75333 9.53674e-07 6.14422V25.8562C9.53674e-07 29.2462 2.69362 32.0001 6.00989 32.0001H25.9901C29.3064 32.0001 32 29.2462 32 25.8562L32 6.14422Z" fill="#D8AE5E" />
					<path fill-rule="evenodd" clip-rule="evenodd" d="M0.0010891 19.88H15.9832V31.9999H0.00110081L0.0010891 19.88Z" fill="#D8AE5E" />
					<path
						d="M14.5433 21.181L11.966 21.1784V18.0273C11.966 17.354 12.2214 17.0036 12.7849 16.9235H14.5433C15.7974 16.9235 16.6086 17.732 16.6086 19.0405C16.6086 20.3844 15.8179 21.1797 14.5433 21.181ZM11.966 12.6818V11.8523C11.966 11.1266 12.2663 10.7814 12.9248 10.7368H14.2443C15.3751 10.7368 16.0528 11.4284 16.0528 12.5873C16.0528 13.4692 15.5881 14.4995 14.2853 14.4995H11.966V12.6818ZM17.8343 15.8264L17.3684 15.5586L17.7753 15.2029C18.2489 14.7869 19.0422 13.8511 19.0422 12.2369C19.0422 9.76425 17.1669 8.16965 14.2648 8.16965H10.9532V8.16833H10.5759C9.71588 8.20115 9.02661 8.91643 9.01763 9.80101V23.8308H14.3302C17.5558 23.8308 19.6377 22.0354 19.6377 19.2544C19.6377 17.7569 18.9652 16.4773 17.8343 15.8264Z"
						fill="white"
					/>
					<path d="M21.0214 21.8928C21.0214 20.8211 21.8667 19.954 22.9083 19.954C23.9525 19.954 24.8019 20.8211 24.8019 21.8928C24.8019 22.9632 23.9525 23.8317 22.9083 23.8317C21.8667 23.8317 21.0214 22.9632 21.0214 21.8928Z" fill="#F4F4F4" />
				</g>
				<defs>
					<clipPath id="clip0_14_4364">
						<rect width="32" height="32" fill="white" />
					</clipPath>
				</defs>
			</motion.svg>
			<motion.svg custom={2} variants={item} initial="hidden" viewport={{ once: true }} whileInView="visible" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_14_4370)">
					<path
						d="M16 2.88125C20.275 2.88125 20.7813 2.9 22.4625 2.975C24.025 3.04375 24.8688 3.30625 25.4313 3.525C26.175 3.8125 26.7125 4.1625 27.2688 4.71875C27.8313 5.28125 28.175 5.8125 28.4625 6.55625C28.6813 7.11875 28.9438 7.96875 29.0125 9.525C29.0875 11.2125 29.1063 11.7188 29.1063 15.9875C29.1063 20.2625 29.0875 20.7688 29.0125 22.45C28.9438 24.0125 28.6813 24.8563 28.4625 25.4188C28.175 26.1625 27.825 26.7 27.2688 27.2563C26.7063 27.8188 26.175 28.1625 25.4313 28.45C24.8688 28.6688 24.0188 28.9313 22.4625 29C20.775 29.075 20.2688 29.0938 16 29.0938C11.725 29.0938 11.2188 29.075 9.5375 29C7.975 28.9313 7.13125 28.6688 6.56875 28.45C5.825 28.1625 5.2875 27.8125 4.73125 27.2563C4.16875 26.6938 3.825 26.1625 3.5375 25.4188C3.31875 24.8563 3.05625 24.0063 2.9875 22.45C2.9125 20.7625 2.89375 20.2563 2.89375 15.9875C2.89375 11.7125 2.9125 11.2063 2.9875 9.525C3.05625 7.9625 3.31875 7.11875 3.5375 6.55625C3.825 5.8125 4.175 5.275 4.73125 4.71875C5.29375 4.15625 5.825 3.8125 6.56875 3.525C7.13125 3.30625 7.98125 3.04375 9.5375 2.975C11.2188 2.9 11.725 2.88125 16 2.88125ZM16 0C11.6563 0 11.1125 0.01875 9.40625 0.09375C7.70625 0.16875 6.5375 0.44375 5.525 0.8375C4.46875 1.25 3.575 1.79375 2.6875 2.6875C1.79375 3.575 1.25 4.46875 0.8375 5.51875C0.44375 6.5375 0.16875 7.7 0.09375 9.4C0.01875 11.1125 0 11.6562 0 16C0 20.3438 0.01875 20.8875 0.09375 22.5938C0.16875 24.2938 0.44375 25.4625 0.8375 26.475C1.25 27.5313 1.79375 28.425 2.6875 29.3125C3.575 30.2 4.46875 30.75 5.51875 31.1562C6.5375 31.55 7.7 31.825 9.4 31.9C11.1063 31.975 11.65 31.9937 15.9938 31.9937C20.3375 31.9937 20.8813 31.975 22.5875 31.9C24.2875 31.825 25.4563 31.55 26.4688 31.1562C27.5188 30.75 28.4125 30.2 29.3 29.3125C30.1875 28.425 30.7375 27.5313 31.1438 26.4813C31.5375 25.4625 31.8125 24.3 31.8875 22.6C31.9625 20.8938 31.9813 20.35 31.9813 16.0063C31.9813 11.6625 31.9625 11.1188 31.8875 9.4125C31.8125 7.7125 31.5375 6.54375 31.1438 5.53125C30.75 4.46875 30.2063 3.575 29.3125 2.6875C28.425 1.8 27.5313 1.25 26.4813 0.84375C25.4625 0.45 24.3 0.175 22.6 0.1C20.8875 0.01875 20.3438 0 16 0Z"
						fill="#D8AE5E"
					/>
					<path
						d="M16 7.78125C11.4625 7.78125 7.78125 11.4625 7.78125 16C7.78125 20.5375 11.4625 24.2188 16 24.2188C20.5375 24.2188 24.2188 20.5375 24.2188 16C24.2188 11.4625 20.5375 7.78125 16 7.78125ZM16 21.3312C13.0563 21.3312 10.6687 18.9438 10.6687 16C10.6687 13.0563 13.0563 10.6687 16 10.6687C18.9438 10.6687 21.3312 13.0563 21.3312 16C21.3312 18.9438 18.9438 21.3312 16 21.3312Z"
						fill="#D8AE5E"
					/>
					<path d="M26.4625 7.45623C26.4625 8.51873 25.6 9.37498 24.5438 9.37498C23.4813 9.37498 22.625 8.51248 22.625 7.45623C22.625 6.39373 23.4875 5.53748 24.5438 5.53748C25.6 5.53748 26.4625 6.39998 26.4625 7.45623Z" fill="#D8AE5E" />
				</g>
				<defs>
					<clipPath id="clip0_14_4370">
						<rect width="32" height="32" fill="white" />
					</clipPath>
				</defs>
			</motion.svg>
		</div>
	);
}

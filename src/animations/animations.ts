export const animation = {
	fromTop: (delay: number = 0) => ({
		initial: { translateY: 100, opacity: 0, transition: transition.spring(delay) },
		animate: { translateY: 0, opacity: 1, transition: transition.spring(delay) },
	}),
	fromRight: (delay: number = 0) => ({
		initial: { translateX: 100, opacity: 0, transition: transition.spring(delay) },
		animate: { translateX: 0, opacity: 1, transition: transition.spring(delay) },
	}),
	scale: (delay: number = 0) => ({
		initial: { scale: 0, opacity: 0, transition: transition.spring(delay) },
		animate: { scale: 1, opacity: 1, transition: transition.spring(delay) },
	}),
	opacity: (delay: number = 0) => ({
		initial: { opacity: 0, transition: transition.spring(delay) },
		animate: { opacity: 1, transition: transition.spring(delay) },
	}),
	multiple: {
		fromLeft: (index: number) => ({
			initial: { opacity: 0, x: -100, transition: transition.easeOut(index * 0.2) },
			animate: {
				opacity: 1,
				x: 0,
				transition: transition.easeOut(index * 0.2),
			},
		}),
		opacityAndScale: (index: number) => ({
			initial: { opacity: 0, scale: 0, transition: transition.easeOut(index * 0.2) },
			animate: { opacity: 1, scale: 1, transition: transition.easeOut(index * 0.2) },
		}),
	},
};

const transition = {
	spring: (delay = 0) => ({
		type: "spring",
		stiffness: 100,
		damping: 20,
		delay,
	}),
	easeOut: (delay = 0) => ({
		delay,
		ease: "easeOut",
		duration: 1,
	}),
};

export const viewport = {
	once: true,
};

const ATTRACTION_PATH = "/attractions";

export const hero = {
	header: "Miód Malina",
	subheader: "Osada Istebna",
	button: "Zobacz więcej",
	image: {
		src: "/hero-image-min.webp",
		alt: "Domki w osadzie Miód Malina",
	},
	navigation: {
		links: [
			{
				label: "O nas",
				href: "#about",
			},
			{
				label: "Atrakcje",
				href: "#attractions",
			},
			{
				label: "Udogodnienia",
				href: "#facilities",
			},
		],
	},
};

export const about = {
	header: "O nas",
	subheader: "Trochę o nas, domkach i naszej osadzie",
	text: "Osada Miód Malina powstała w 2023 roku. Do dyspozycji naszych gości mamy obecnie 4 domy, których wynajem uruchomiliśmy na koniec 2023 roku. Osada jest całkowicie nowa i czeka aby ugościć i rozpieścić swoich gości..",
};

export const data = {
	attractions: {
		list: [
			{
				icon: `${ATTRACTION_PATH}/swimming.svg`,
				text: "Park wodny",
			},
			{
				icon: `${ATTRACTION_PATH}/sleigh-ride.svg`,
				text: "Kuligi",
			},
			{
				icon: `${ATTRACTION_PATH}/slopes.svg`,
				text: "Stoki",
			},
			{
				icon: `${ATTRACTION_PATH}/spa.svg`,
				text: "Resorty SPA",
			},
			{
				icon: `${ATTRACTION_PATH}/park-rope.svg`,
				text: "Park linowy",
			},
			{
				icon: `${ATTRACTION_PATH}/restaurants.svg`,
				text: "Restauracje i karczmy",
			},
			{
				icon: `${ATTRACTION_PATH}/triptych.svg`,
				text: "Trójtyk",
			},
			{
				icon: `${ATTRACTION_PATH}/routes.svg`,
				text: "Szlaki turystyczne",
			},
		],
	},
};

export const contact = {
	header: "Kontakt",
	subheader: "Pozostańmy w kontakcie...",
	phone: "+48 664 769 936",
	email: "miodmalina.istebna@gmail.com",
	place: "Jasnowice 2024, 43-470 Istebna",
};

export const facilities = {
	header: "Udogodnienia",
	subheader: "Czekają na was...",
	title1: "W naszej osadzie czekają na naszych gości",
	title2: "W każdym domku goście mają do dyspozycji",
	top: [
		{
			src: "/facilities/1-min.webp",
			text: "Narciarnia",
			alt: "Narciarnia",
		},
		{
			src: "/facilities/2-min.webp",
			text: "Plac zabaw dla dzieci",
			alt: "Plac zabaw dla dzieci",
		},
		{
			src: "/facilities/3-min.webp",
			text: "Duże tarasy z wyposażeniem",
			alt: "Duże tarasy z wyposażeniem",
		},
		{
			src: "/facilities/4-min.webp",
			text: "Prywatne balie ogrzewane drewnem",
			alt: "Prywatne balie ogrzewane drewnem",
		},
		{
			src: "/facilities/5-min.webp",
			text: "Duża wiata z paleniskiem",
			alt: "Duża wiata z paleniskiem",
		},
		{
			src: "/facilities/6-min.webp",
			text: "Prywatne grille oraz drewno do balii",
			alt: "Prywatne grille oraz drewno do balii",
		},
	],
	bottom: [
		{
			src: "/facilities/7-min.webp",
			text: "Taras z widokiem",
			alt: "Taras z widokiem",
		},
		{
			src: "/facilities/8-min.webp",
			text: "Zestaw ręczników i szlafroków",
			alt: "Zestaw ręczników i szlafroków",
		},
		{
			src: "/facilities/9-min.webp",
			text: "Płytę indukcyjną, pierkarnik i zmywarkę",
			alt: "Płytę indukcyjną, pierkarnik i zmywarkę",
		},
		{
			src: "/facilities/10-min.webp",
			text: "Smart TV z wifi",
			alt: "Smart TV z wifi",
		},
		{
			src: "/facilities/11-min.webp",
			text: "Kominek z drewnem na opał",
			alt: "Kominek z drewnem na opał",
		},
		{
			src: "/facilities/6-min.webp",
			text: "Ekspres do kawy na ziarna",
			alt: "Ekspres do kawy na ziarna",
		},
	],
};

export const footer = {
	text1: "+48 664 769 936 / miodmalina.istebna@gmail.com / Jasnowice 2024, 43-470 Istebna",
	text2: "Miód Malina © 2024",
};

export const socialMedia = {
	facebook: "https://www.facebook.com/",
	behance: "https://www.behance.net/",
	instagram: "https://www.instagram.com/",
};

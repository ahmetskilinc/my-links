import { v4 as uuid } from "uuid";

interface Link {
	id: string;
	title: string;
	link: string;
	description?: string;
}

const links: Link[] = [
	// {
	// 	id: uuid(),
	// 	title: "Portfolio",
	// 	link: "https://ahmetk.dev",
	// },
	// {
	// 	id: uuid(),
	// 	title: "Blog",
	// 	link: "https://blog.ahmetk.dev",
	// },
	{
		id: uuid(),
		title: "Github",
		link: "https://github.com/ahmetskilinc",
	},
	{
		id: uuid(),
		title: "Codepen",
		link: "https://codepen.io/ahmetskilinc",
	},
	{
		id: uuid(),
		title: "Linkedin",
		link: "https://linkedin.com/in/ahmetskilinc",
	},
	// {
	// 	id: uuid(),
	// 	title: "Kilinc Media",
	// 	link: "https://kilinc.me",
	// 	description: "Creative Web Agency",
	// },
	{
		id: uuid(),
		title: "Instagram",
		link: "https://instagram.com/ahmetkdev",
	},
];

export default links;

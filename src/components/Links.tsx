import "../assets/styles/Links.css";
import { v4 as uuid } from "uuid";

const links: any[] = [
	{ id: uuid, title: "Instagram", link: "https://instagram.com/bruvimtired" },
	{ id: uuid, title: "Twitter", link: "https://twitter.com/bruvimtired" },
	{ id: uuid, title: "Github", link: "https://github.com/ahmetskilinc" },
	{ id: uuid, title: "Linkedin", link: "https://linkedin.com/in/ahmetskilinc" },
];

const Link = () => {
	return (
		<div className="links">
			{links.map((link) => (
				<a className="link" key={link.id} href={link.link}>
					<p className="link-tile">{link.title}</p>
				</a>
			))}
		</div>
	);
};

export default Link;

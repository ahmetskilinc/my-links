import "../assets/styles/Links.css";
import links from "../links";

const Link = () => {
	return (
		<div className="links">
			{links.map(({ id, title, link, description }) => (
				<a className="link" key={id} href={link}>
					<p className="link-tile">{title}</p>
					{description ? <p className="link-description">{description}</p> : null}
				</a>
			))}
		</div>
	);
};

export default Link;

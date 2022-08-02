import "../assets/styles/Links.css";
import { v4 as uuid } from "uuid";

const links: any[] = [
  {
    id: uuid(),
    title: "Portfolio",
    link: "https://ahmet.wtf"
  },
  { id: uuid(), title: "Github", link: "https://github.com/ahmetskilinc" },
  {
    id: uuid(),
    title: "Linkedin",
    link: "https://linkedin.com/in/ahmetskilinc"
  },
  {
    id: uuid(),
    title: "Kilinc Media",
    link: "https://kilinc.me",
    description: "Creative Web Agency"
  }
];

const Link = () => {
  return (
    <div className="links">
      {links.map(({ id, title, link, description }, index) => (
        <a className="link" key={id} href={link}>
          <p className="link-tile">{title}</p>
          {description ? (
            <p className="link-description">{description}</p>
          ) : null}
        </a>
      ))}
    </div>
  );
};

export default Link;

import "./Navbar.css";
import { RiDiscordFill, RiTwitterXLine } from "react-icons/ri";

const Navbar = () => {
  const discordUrl = "https://discord.gg/SkEfBbX75E";
  const twitterUrl = "https://twitter.com/Galaxia3Studios";

  return (
    <nav className="navbar">
      <section className="nav_left">
        <div className="logo_holder">
          <img
            src="https://explorer.galaxiastudios.com/images/galaxiaE/Galaxia%20Studios.png"
            alt="collection_logo"
            onClick={() => window.open("https://www.galaxiastudios.com/")}
          />
        </div>

        <div className="nav_links">
          <a href={discordUrl}>
            <RiDiscordFill size={25} display="block" />
          </a>
          <a href={twitterUrl}>
            <RiTwitterXLine size={20} display="block" />
          </a>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;

import "./Footer.css";
import mysticLogo from "../../assets/mystic-logo.svg";
import { RiDiscordFill, RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  const discordUrl = "https://discord.gg/SkEfBbX75E";
  const twitterUrl = "https://twitter.com/Galaxia3Studios";

  return (
    <footer>
      <section>
        <p> © {new Date().getFullYear()} Galaxia Explorer by Galaxia Studios</p>
      </section>
      <section className="footer_links_holder">
        <a>Privacy Policy</a>
        <a>Terms & Conditions</a>
        <div>
          <p>Powered by</p>
          <span>
            <img src={mysticLogo} alt="" />
          </span>
        </div>
      </section>

      <section className="socials">
        <a href={discordUrl}>
          <RiDiscordFill size={30} display="block" />
        </a>
        <a href={twitterUrl}>
          <RiTwitterXLine size={25} display="block" />
        </a>
      </section>
    </footer>
  );
};

export default Footer;

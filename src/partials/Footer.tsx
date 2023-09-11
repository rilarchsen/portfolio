import Linkedin from "../assets/linkedin.svg";
import {SocialIcon} from "react-social-icons";

export default function Footer() {
  return (
    <footer className={"p-4 text-center flex flex-col gap-2"}>
      <div className={"flex gap-2 justify-center"}>
        <SocialIcon network="github" url={"https://github.com/rilarchsen"} target={"__blank"} />
        <SocialIcon network="linkedin" url={"https://www.linkedin.com/in/richard-avenia/"} target={"__blank"} />
      </div>
      <p>Copyright © {(new Date()).getFullYear()} Richard Avenia</p>
    </footer>
  );
}
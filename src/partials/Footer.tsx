import { Footer as FlowBiteFooter } from 'flowbite-react';
import {SocialIcon} from "react-social-icons";

export default function DefaultFooter() {
  return (
    <FlowBiteFooter container className={"mt-4 flex flex-col gap-2 content-width "}>
      <FlowBiteFooter.LinkGroup className={"flex gap-2 justify-center"}>
        <SocialIcon network="github" url={"https://github.com/rilarchsen"} target={"__blank"} />
        <SocialIcon network="linkedin" url={"https://www.linkedin.com/in/richard-avenia/"} target={"__blank"} />
      </FlowBiteFooter.LinkGroup>
      <FlowBiteFooter.Copyright
        by="Richard Avenia"
        year={(new Date()).getFullYear()}
        className={"text-center"}
      />
    </FlowBiteFooter>
  )
}



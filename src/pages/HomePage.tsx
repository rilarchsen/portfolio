import LogoBlackText from '@assets/cover_name_black_text.png';
import LogoWhiteText from '@assets/cover_name_white_text.png';
import {useTheme} from "@contexts/useTheme";
import Timeline from "@components/Timeline";
import { HiCalendar } from 'react-icons/hi';
import {Card} from "flowbite-react";

export default function HomePage() {
  const {theme} = useTheme();
  const isDarkTheme = theme === "dark";
  return (
    <div className={"flex flex-col justify-center items-center content-width"}>
      <img src={isDarkTheme ? LogoWhiteText : LogoBlackText} className={"w-full drop-shadow-xl"} />
      <div className={"w-full bg-content rounded text-center p-4"}>
        <h1 className={"mb-4"}>{"> whoami"}</h1>
        <div className={"xl:p-4"}>
          <Card className={"dark:bg-gray-700"}>
            <h2>Education</h2>
            <Timeline className={"text-left p-2"} elements={[
              {
                title: "Bachelor of Computer Science from Aalborg University",
                body: "Began studying for my bachelor's degree in Computer Science (Datalogi) at Aalborg University in 2021.",
                time: "2021 - Present",
                icon: HiCalendar
              },
              {
                title: "International Baccalaureate Diploma Programme",
                body: "Graduated from the International Baccalaureate Diploma Programme in 2021 from Struer Statsgymnasium.",
                time: "2019 - 2021",
                icon: HiCalendar
              }
            ]} />
          </Card>
        </div>
      </div>
    </div>
  );
}
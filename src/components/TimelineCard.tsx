import {Card} from "flowbite-react";
import {useTheme} from "@contexts/useTheme.tsx";

type TimelineCardProps = {
  title: string;
  description: string;
  logo: string;
  logoDark?: string;
};

export default function TimelineCard({title, description, logo, logoDark}: TimelineCardProps) {

  const {theme} = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <Card className="w-full">
      <div className={"flex items-center"}>
        <img src={isDarkTheme ? logoDark ?? logo : logo} className={`w-28 h-28 p-2`} />
        <div className={"flex flex-col gap-2"}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}
import {ReactNode} from "react";
import {ArrowDownCircleIcon, ArrowUpCircleIcon} from "@heroicons/react/24/outline";
import {twMerge} from "tailwind-merge";
import { Tooltip } from 'flowbite-react';
import {useTheme} from "@contexts/useTheme.tsx";
import { Link } from 'react-scroll';

type SectionProps = {
  previousSectionId?: string;
  previousSectionName?: string;
  nextSectionId?: string;
  nextSectionName?: string;
  children: ReactNode;
  sectionId: string;
  className?: string;
}
export default function Section({previousSectionId, previousSectionName, nextSectionId, nextSectionName, children, sectionId, className} : SectionProps) {
  const {theme} = useTheme();
  return (
    <div className={twMerge(`flex items-center justify-center h-screen w-full relative px-4 lg:px-0`, className)} id={sectionId}>
      {previousSectionId && (<>
        <Link to={`${previousSectionId}`} className={"absolute top-20"}>
          <Tooltip content={previousSectionName} placement={"bottom"} style={theme}>
            <ArrowUpCircleIcon className="h-10 lg:h-16 w-10 lg:w-16 cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-700 dark:hover:text-gray-600" aria-hidden="true" />
          </Tooltip>
        </Link>
      </>)}
      <div className="space-y-12">
        {children}
      </div>
      {nextSectionId && (
        <Link to={`${nextSectionId}`} className={"absolute bottom-20 lg:bottom-10"}>
          <Tooltip content={nextSectionName} placement={"top"} style={theme}>
            <ArrowDownCircleIcon className="h-10 lg:h-16 w-10 lg:w-16 cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-700 dark:hover:text-gray-600" aria-hidden="true" />
          </Tooltip>
        </Link>
      )}
    </div>
  );
}
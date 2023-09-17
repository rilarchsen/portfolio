'use client';

import { Button, Timeline } from 'flowbite-react';
import {IconBaseProps} from "react-icons/lib/cjs/iconBase";

type TimelineProps = {
  elements: TimelineElement[];
  className?: string;
};

type TimelineElement = {
  title: string;
  body: string;
  time: string;
  icon?: (props: IconBaseProps) => Element;
  button?: TimelineButton;
};

type TimelineButton = {
  text: string;
  href?: string;
  onClick?: () => void;
};

export default function VerticalTimeline({elements, className}: TimelineProps) {
  return (
    <Timeline className={className ?? ""}>
      {elements.map((element: TimelineElement, index: number) => (
        <Timeline.Item key={index} className={"last:mb-0"}>
          <Timeline.Point icon={element.icon} />
          <Timeline.Content>
            <Timeline.Time>
              {element.time}
            </Timeline.Time>
            <h3 className={"xl:text-xl"}>
              {element.title}
            </h3>
            <Timeline.Body className={"md:text-base text-sm"}>
              {element.body}
            </Timeline.Body>
            {element.button && (
              <Button color="gray" onClick={element.button.onClick} href={element.button.href}>
                <p>
                  {element.button.text}
                </p>
              </Button>
            )}
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  )
}
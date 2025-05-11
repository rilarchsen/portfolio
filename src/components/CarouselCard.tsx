import { Children, ReactNode } from "react";

export type CarouselCardProps = {
    sideInitials: string[],
    title: ReactNode,
    body: ReactNode
}
export default function CarouselCard({sideInitials, title, body} : CarouselCardProps) {


    return (
        <div className="flex flex-col lg:flex-row gap-8 h-full items-center lg:justify-center bg-gray-300 dark:bg-gray-700 dark:text-white py-8 px-10 lg:px-20 select-none overflow-auto">
            <div className={"flex flex-row lg:flex-col dark:bg-gray-800 bg-gray-200 p-4 lg:p-8 rounded"}>
                {Children.toArray(sideInitials.map(x => <h1>{x}</h1>))}
            </div>
            <div>
                <h1 className={"text-center lg:text-left"}>{title}</h1>
                <p>{body}</p>
            </div>
            </div>
    );
}
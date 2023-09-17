import {ReactNode} from "react";
import ChildrenRenderer from "./ChildrenRenderer.tsx";

export default function Page({children} : {children: ReactNode}) {

  return (
    <div className={"w-1/2 rounded bg-content p-8 drop-shadow flex flex-col items-center"}>
      <ChildrenRenderer children={children} />
    </div>
  );
}
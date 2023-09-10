import {ReactNode} from "react";

export default function Layout({children} : {children: ReactNode}) {
  return (
    <div className={"w-screen h-screen bg-gray-300 xl:p-24 p-8 overflow-auto"}>
      {children}
    </div>
  );
}
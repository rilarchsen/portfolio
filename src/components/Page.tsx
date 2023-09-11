import {ReactNode} from "react";

export default function Page({children} : {children: ReactNode}) {

  return (
    <div className={"w-full rounded bg-content p-8 drop-shadow"}>
      {children}
    </div>
  );
}
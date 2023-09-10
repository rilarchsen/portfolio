import {ReactNode} from "react";

export default function Page({children} : {children: ReactNode}) {
  return (
    <div className={"w-full rounded bg-white p-8 drop-shadow"}>
      {children}
    </div>
  );
}
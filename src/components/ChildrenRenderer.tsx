import {Children, ReactNode} from "react";

export default function ChildrenRenderer({children} : {children: ReactNode}) {
  return Children.map(children, (child) => child)
}
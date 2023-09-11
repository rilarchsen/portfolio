import NotFound from '../assets/not-found.png'
import {Link} from "react-router-dom";
export default function NotFoundPage() {
  return (
    <div className={"flex flex-col items-center gap-8 py-20"}>
      <img src={NotFound} alt="Not found" className={"w-1/2"}/>
      <div className={"flex text-3xl whitespace-pre"}>
        <p>
          Page not found, try heading
        </p>
        <p> </p>
        <Link to={"/"} className={"text-blue-700 underline"}>home</Link>
        <p>?</p>
      </div>
    </div>
  );
}
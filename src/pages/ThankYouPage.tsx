import {CheckIcon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";

export default function ThankYouPage() {
  return (
    <div className={"text-center flex flex-col items-center"}>
      <p className={"font-thin text-4xl"}>Thank you!</p>
      <CheckIcon className={"w-40 text-green-600"} />
      <p className={"font-thin text-2xl"}>Your message has been sent.</p>
      <Link to={"/"} className={"text-blue-600 underline my-4"}>Go back home</Link>
    </div>
  );
}
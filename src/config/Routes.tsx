import {RouteObject} from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";
import ContactPage from "@pages/ContactPage.tsx";
import ThankYouPage from "@pages/ThankYouPage.tsx";

export const Routes : RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />
  },
  {
    path: "/thank-you",
    element: <ThankYouPage />
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
];

type RouteAttribute = {
  name: string;
}

export const RouteAttributes : Record<string, RouteAttribute> = {
  "/": {
    name: "Home",
  },
  "/contact": {
    name: "Contact",
  }
};
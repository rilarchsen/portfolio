import {RouteObject} from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import AboutPage from "../pages/AboutPage.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";

export const Routes : RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />
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
  "/about": {
    name: "About",
  }
};
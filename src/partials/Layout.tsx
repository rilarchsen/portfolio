import Navbar from "./Navbar.tsx";
import {Outlet} from "react-router-dom";
import Footer from "./Footer.tsx";

export default function Layout() {
  return (
    <div className={"h-screen w-screen overflow-auto"}>
      <Navbar />
      <div className={"min-h-[calc(100vh-4rem)] bg-site p-12 flex flex-col justify-between items-center"}>
        <Outlet />
        <Footer />
      </div>
  </div>
  );
}
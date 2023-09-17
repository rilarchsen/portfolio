import Navbar from "./Navbar.tsx";
import {Outlet} from "react-router-dom";
import Footer from "./Footer.tsx";
import Page from "../components/Page.tsx";

export default function Layout() {
  return (
    <div className={"h-screen w-screen overflow-auto"}>
      <Navbar />
      <div className={"min-h-[calc(100vh-4rem)] bg-site p-12 flex flex-col justify-between items-center"}>
        {/*<Page>*/}
          <Outlet />
        {/*</Page>*/}
        <Footer />
      </div>
  </div>
  );
}
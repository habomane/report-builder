import { Outlet } from "react-router-dom";
//component imports
import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <div className="grid h-screen grid-rows-[auto_1fr_auto] relative font-base">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default AppLayout;

import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Mainlayout() {
  return (
    <>
      <main className="w-full max-w-[1900px] m-4 mx-auto">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

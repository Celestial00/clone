import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Mainlayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow w-full max-w-[1900px] px-4 mx-auto">
        <Navbar />
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

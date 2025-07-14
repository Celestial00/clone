import { Outlet } from "react-router-dom";

export default function Mainlayout() {
  return (
    <>
      <main className="w-full max-w-[1900px] m-4 mx-auto">
        <Outlet />
      </main>
    </>
  );
}

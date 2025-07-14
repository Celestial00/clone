import React, { useEffect, useState } from "react";

export default function HomePage() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <>
      <h1 className="  dark:text-white  ">HomePage </h1>
      <button className=" cursor-pointer " onClick={() => setDark((prev) => !prev)}>
        Dark mode
      </button>
    </>
  );
}

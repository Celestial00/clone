import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function bottomnavbar() {
  const nav = useNavigate();
  const [NavITems, setNavItems] = useState([
    {
      root: "/",
      isSelected: true,
      iconName: "home",
    },

    {
      root: "/about",
      isSelected: false,
      iconName: "user",
    },

    {
      root: "/project",
      isSelected: false,
      iconName: "bag",
    },

    {
      root: "/notebook",
      isSelected: false,
      iconName: "pen",
    },

    {
      root: "/contact",
      isSelected: false,
      iconName: "msg",
    },

    {
      root: "/tech",
      isSelected: false,
      iconName: "menu",
    },
  ]);

  const handleNav = (root, index) => {
    setNavItems((prev) =>
      prev.map((item, i) => ({ ...item, isSelected: i === index }))
    );

    nav(root);
  };

  return (
    <>
      <div className="lg:hidden fixed bottom-0 left-4 right-4 z-10 flex mb-4 h-20 rounded-2xl bg-[#18181D99]">
        {NavITems.map((item, index) => {
          return (
            <div
              key={index}
              className={` flex-1 flex justify-center items-center  my-3 mx-2 rounded-xl  ${
                item.isSelected ? "bg-[#FFFFFF1A]" : ""
              } `}
              onClick={() => handleNav(item.root, index)}
            >
              {item.isSelected ? (
                <img
                  src={`bottomnav/selected${item.iconName}.png`}
                  alt=""
                  srcset="  "
                  className="w-6  h-6"
                />
              ) : (
                <img
                  src={`bottomnav/${item.iconName}.png`}
                  alt=""
                  srcset="  "
                  className="w-6  h-6"
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

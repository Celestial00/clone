import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ColorfulBackground from "./TopBlur";

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);
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

  const ToggleDropDown = () => {
    setDropDown((prev) => !prev);
  };

  return (
    <>
      <ColorfulBackground />
      <div className=" hidden lg:flex rounded-sm z-10 p-4 items-center justify-between bg-[#ffffff40] backdrop-blur-xl border-[1px] border-[#ffffff40]  dark:bg-[#18181D4D] dark:border-none w-full h-[60px] mt-[-40px] ">
        <div className="  flex py-2 px-2 gap-8">
          <div className="">
            <svg
              className="text-[#181818] dark:text-[#FFFFFF]"
              width="40"
              height="26"
              viewBox="0 0 40 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0H6.06939V2.50172H2.62914V23.4983H6.06939V26H0V0Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.3422 6.24032C24.7985 4.63171 22.673 3.82741 19.9659 3.82741C18.2431 3.82741 16.7217 4.21773 15.4017 4.99838C14.0817 5.75537 13.0525 6.83171 12.3142 8.22741C11.9401 8.94427 11.6638 9.71924 11.4852 10.5523H7.86472L6.06939 14.5082H11.3306C11.4813 15.7347 11.8203 16.8465 12.3478 17.8436C13.1085 19.2156 14.1712 20.2801 15.536 21.0371C16.9231 21.7941 18.5452 22.1726 20.4021 22.1726C21.834 22.1726 23.1876 21.9124 24.4629 21.3919C25.7382 20.8715 26.8121 20.1382 27.6846 19.1919L25.2012 16.4952C24.6642 17.0156 23.9819 17.4296 23.154 17.7371C22.3262 18.021 21.4649 18.1629 20.5699 18.1629C19.2499 18.1629 18.1536 17.8317 17.2811 17.1694C16.4309 16.507 15.9275 15.62 15.7709 14.5082H32.401L33.7973 10.5523H28.4707C28.1566 8.81205 27.4471 7.3747 26.3422 6.24032ZM24.2255 10.5523C24.0305 9.80106 23.651 9.17985 23.0869 8.6887C22.3262 8.02634 21.3306 7.69516 20.1001 7.69516C18.9143 7.69516 17.9411 8.02634 17.1804 8.6887C16.6297 9.16513 16.2408 9.78634 16.0137 10.5523H24.2255Z"
                fill="currentColor"
              />
              <path
                d="M33.7973 0H39.8667V26H33.7973V23.4983H37.2376V2.50172H33.7973V0Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="flex  gap-8">
            <Link to="/">
              <p className="dark:text-[var(--secondary)]  text-[16px] ">
                About
              </p>
            </Link>
            <Link to="/project">
              <p className="dark:text-[var(--secondary)] text-[16px] ">Work</p>
            </Link>
            <Link to="/notebook">
              <p className="dark:text-[var(--secondary)] text-[16px] ">Notebook</p>
            </Link>
            <Link to="/contact">
              <p className="dark:text-[var(--secondary)] text-[16px] ">Contact</p>
            </Link>
            <div
              className="flex gap-1 items-center cursor-pointer"
              onClick={ToggleDropDown}
            >
              {/*  */}

              <p className="dark:text-[var(--secondary)] text-[16px] ">More </p>

              <svg
                className={`text-[#181818] dark:text-[#FFFFFF] ${
                  dropDown ? "" : "rotate-270"
                }   `}
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.53418 8.4493C8.41923 9.66753 9.45674 10.7587 10.6193 11.6945C10.7653 11.812 10.9697 11.812 11.1157 11.6945C12.2783 10.7587 13.3158 9.66753 14.2008 8.4493"
                  stroke="currentColor"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            {dropDown ? (
              <div className=" absolute top-16 left-98 w-35 h-35  rounded-sm bg-[#FFFFFF40] backdrop-blur-lg  dark:bg-[#18181899] flex flex-col py-5 items-center gap-4 ">
                <p className="  dark:text-[#C5C5C5] text-[#181818] ">
                  BookShelf
                </p>
                <p className="  dark:text-[#C5C5C5] text-[#181818] ">
                  Tech Stack
                </p>
                <p className="  dark:text-[#C5C5C5] text-[#181818]">
                  {" "}
                  This Ui Kit
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* Icons for LInks and DarkMode Button */}

        <div className="flex gap-5">
          <div className=" cursor-pointer ">
            <svg
              className="text-[#181818] dark:text-[#FFFFFF]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.556 22.9979H3.44792C2.09813 22.9979 1.00391 21.9037 1.00391 20.5539V3.44584C1.00391 2.09605 2.09813 1.00183 3.44792 1.00183H20.556C21.9058 1.00183 23 2.09605 23 3.44584V20.5539C23 21.9037 21.9058 22.9979 20.556 22.9979ZM16.6797 19.9429H19.9438V13.2376C19.9438 10.4005 18.3355 9.02868 16.0891 9.02868C13.8417 9.02868 12.8959 10.7788 12.8959 10.7788V9.35224H9.75023V19.9429H12.8959V14.3835C12.8959 12.8938 13.5816 12.0074 14.8941 12.0074C16.1005 12.0074 16.6797 12.8592 16.6797 14.3835V19.9429ZM4.05773 6.01118C4.05773 7.0904 4.92598 7.96547 5.99746 7.96547C7.06894 7.96547 7.93668 7.0904 7.93668 6.01118C7.93668 4.93195 7.06894 4.05688 5.99746 4.05688C4.92598 4.05688 4.05773 4.93195 4.05773 6.01118ZM7.65329 19.9429H4.37317V9.35224H7.65329V19.9429Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="cursor-pointer">
            <svg
              className="text-[#181818] dark:text-[#FFFFFF]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1316_3461)">
                <path
                  d="M18.2439 2.25H21.5519L14.3249 10.51L22.8269 21.75H16.1699L10.9559 14.933L4.98991 21.75H1.67991L9.40991 12.915L1.25391 2.25H8.07991L12.7929 8.481L18.2439 2.25ZM17.0829 19.77H18.9159L7.08391 4.126H5.11691L17.0829 19.77Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_1316_3461">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="cursor-pointer">
            <svg
              className="text-[#181818] dark:text-[#FFFFFF]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1316_3466)">
                <g clipPath="url(#clip1_1316_3466)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9642 -1.52588e-05C5.34833 -1.52588e-05 0 5.38774 0 12.0531C0 17.3811 3.42686 21.8912 8.18082 23.4874C8.77518 23.6074 8.9929 23.2281 8.9929 22.909C8.9929 22.6295 8.97331 21.6717 8.97331 20.6738C5.64514 21.3923 4.95208 19.237 4.95208 19.237C4.41723 17.8401 3.62474 17.481 3.62474 17.481C2.53543 16.7427 3.70408 16.7427 3.70408 16.7427C4.91241 16.8225 5.54645 17.9799 5.54645 17.9799C6.61592 19.8157 8.33927 19.297 9.03257 18.9776C9.13151 18.1993 9.44865 17.6606 9.78539 17.3613C7.13094 17.0819 4.33812 16.0442 4.33812 11.4144C4.33812 10.0974 4.81323 9.01982 5.56604 8.18178C5.44727 7.88252 5.03118 6.64505 5.68506 4.9888C5.68506 4.9888 6.69527 4.66945 8.97306 6.22603C9.94827 5.96219 10.954 5.82797 11.9642 5.82684C12.9745 5.82684 14.0042 5.96668 14.9552 6.22603C17.2332 4.66945 18.2434 4.9888 18.2434 4.9888C18.8973 6.64505 18.481 7.88252 18.3622 8.18178C19.1349 9.01982 19.5904 10.0974 19.5904 11.4144C19.5904 16.0442 16.7976 17.0618 14.1233 17.3613C14.5592 17.7404 14.9353 18.4587 14.9353 19.5962C14.9353 21.2126 14.9158 22.5098 14.9158 22.9087C14.9158 23.2281 15.1337 23.6074 15.7278 23.4877C20.4818 21.8909 23.9087 17.3811 23.9087 12.0531C23.9282 5.38774 18.5603 -1.52588e-05 11.9642 -1.52588e-05Z"
                    fill="currentColor"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1316_3466">
                  <rect width="24" height="24" fill="currentColor" />
                </clipPath>
                <clipPath id="clip1_1316_3466">
                  <rect width="24" height="23.5102" fill="currentColor" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* border */}

          <div className="cursor-pointer">
            <svg
              className="text-[#181818] dark:text-[#FFFFFF]"
              width="1"
              height="24"
              viewBox="0 0 1 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.499999"
                y2="24"
                stroke="currentColor"
                strokeOpacity="0.25"
              />
            </svg>
          </div>

          <div
            className="cursor-pointer"
            onClick={() => setDark((prev) => !prev)}
          >
            <svg
              className="text-[#181818] dark:text-[#FFFFFF]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1316_3470)">
                <path
                  d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="currentColor"
                />
                <path
                  d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_1316_3470">
                  <rect width="24" height="24" fill="current" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* On Mobile */}

      <div className=" lg:hidden  w-full flex justify-center items-center mt-[-40px]  ">
        <div className="">
          <svg
            className="text-[#181818] dark:text-[#FFFFFF]"
            width="50"
            height="36"
            viewBox="0 0 40 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H6.06939V2.50172H2.62914V23.4983H6.06939V26H0V0Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.3422 6.24032C24.7985 4.63171 22.673 3.82741 19.9659 3.82741C18.2431 3.82741 16.7217 4.21773 15.4017 4.99838C14.0817 5.75537 13.0525 6.83171 12.3142 8.22741C11.9401 8.94427 11.6638 9.71924 11.4852 10.5523H7.86472L6.06939 14.5082H11.3306C11.4813 15.7347 11.8203 16.8465 12.3478 17.8436C13.1085 19.2156 14.1712 20.2801 15.536 21.0371C16.9231 21.7941 18.5452 22.1726 20.4021 22.1726C21.834 22.1726 23.1876 21.9124 24.4629 21.3919C25.7382 20.8715 26.8121 20.1382 27.6846 19.1919L25.2012 16.4952C24.6642 17.0156 23.9819 17.4296 23.154 17.7371C22.3262 18.021 21.4649 18.1629 20.5699 18.1629C19.2499 18.1629 18.1536 17.8317 17.2811 17.1694C16.4309 16.507 15.9275 15.62 15.7709 14.5082H32.401L33.7973 10.5523H28.4707C28.1566 8.81205 27.4471 7.3747 26.3422 6.24032ZM24.2255 10.5523C24.0305 9.80106 23.651 9.17985 23.0869 8.6887C22.3262 8.02634 21.3306 7.69516 20.1001 7.69516C18.9143 7.69516 17.9411 8.02634 17.1804 8.6887C16.6297 9.16513 16.2408 9.78634 16.0137 10.5523H24.2255Z"
              fill="currentColor"
            />
            <path
              d="M33.7973 0H39.8667V26H33.7973V23.4983H37.2376V2.50172H33.7973V0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

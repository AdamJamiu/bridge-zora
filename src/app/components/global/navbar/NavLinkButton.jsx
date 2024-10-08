// This componenthas drodpwn too
"use client";

import { mobile_navbar_data, navbar_data } from "@/app/lib/navbar_data";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import NavButton from "./NavButon";

const NavLinkButton = ({ title, data = [], align, extended }) => {
  const dropdowRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (dropdowRef.current && !dropdowRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdowRef} className="relative">
      <button
        className="flex justify-start items-center gap-3 font-nunito font-semibold hover:underline"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {title ? (
          <>
            <p>{title}</p>

            <IoIosArrowDown
              className={`${
                isOpen ? "rotate-180" : ""
              } ease transition-all duration-200`}
            />
          </>
        ) : (
          <HiDotsVertical
            // onClick={() => setOpen(true)}
            size={20}
            className="md:hidden block"
          />
        )}
      </button>

      {/* Dropdown conntent */}
      <div
        className={`
    ${
      isOpen
        ? "pointer-events-auto translate-y-0 opacity-100"
        : "dropdown-content group-hover:translate-y-0 opacity-0 translate-y-10 pointer-events-none"
    } z-50 py-1 px-3 flex flex-col justify-start items-center w-max min-w-32 transition-transform duration-300 ease-in-out absolute top-10 md:top-7 right-0 lg:left-0 bg-white border border-gray-800 rounded md:text-sm text-white whitespace-nowrap`}
      >
        {data.map((item, index) => (
          <Link
            target="_blank"
            key={index}
            href={item.link}
            className={`w-full px-1 py-1.5 hover:font-semibold text-gray-800 text-${
              align ? align : "center"
            }`}
          >
            {item.label}
          </Link>
        ))}
        {extended ? (
          <>
            <NavButton data={mobile_navbar_data} title="GOTO" />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default NavLinkButton;

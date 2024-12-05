"use client";

import { useState } from "react";

import Link from "next/link";

const Burger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
    setIsMenuOpen((prevState) => !prevState);
  }

  function logOut() {
    // TODO: Add functionality for logout (use a hook, also utilised in Burger component?)
    handleClick();
  }

  return (
    <>
      <div
        onClick={handleClick}
        className={`visible md:hidden border-box h-10 w-10 flex flex-col items-start justify-between ${
          isMenuOpen
            ? ""
            : "rotate-0 translate-x-0 translate-y-0 transition-cubic-bezier-175-885-32-1275 transition duration-500"
        }`}
      >
        <div
          className={`h-1.5 w-10 bg-black rounded-3xl ${
            isMenuOpen
              ? "rotate-45 translate-x-2 translate-y-4 transition ease-out duration-500"
              : ""
          }`}
        ></div>
        <div
          className={`h-1.5 w-10 bg-black rounded-3xl ${
            isMenuOpen ? "scale-01 transition ease-out duration-500" : ""
          }`}
        ></div>
        <div
          className={`h-1.5 w-10 bg-black rounded-3xl ${
            isMenuOpen
              ? "rotate-135 -translate-y-[1.2rem] translate-x-2 ease-out duration-500"
              : ""
          }`}
        ></div>
      </div>

      <div
        className={`visible md:hidden w-6/12 h-screen bg-gray-400 bg-opacity-90 absolute top-0 right-0 -z-10 flex flex-col p-6 pt-32 gap-5 items-end ${
          isMenuOpen ? "visible" : "hidden"
        }`}
      >
        <Link href="/" className="text-black" onClick={handleClick}>
          GALLERY
        </Link>
        <Link href="/about" className="text-black" onClick={handleClick}>
          ABOUT
        </Link>
        {/* TODO: Make upload link conditional to admin.authState === true */}
        <Link href="/upload" className="text-black" onClick={handleClick}>
          UPLOAD
        </Link>

        {/* TODO: Make login link conditional to authState === false  */}
        <Link
          href="/authentication/login"
          className="text-black"
          onClick={handleClick}
        >
          LOG IN
        </Link>

        {/* TODO: Make logout link conditional to authState === true */}
        <p className="text-black  text-base cursor-pointer" onClick={logOut}>
          LOG OUT
        </p>
      </div>
    </>
  );
};

export default Burger;

"use client";

import { useState } from "react";

import SideNav from "./SideNav";

const Burger = () => {
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);

  function handleBurgerClick() {
    setSideNavIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <div
        onClick={handleBurgerClick}
        className="visible md:hidden border-box h-10 w-10 flex flex-col items-start justify-between"
      >
        <div
          className={`h-1.5 w-10 bg-black rounded-3xl ${
            sideNavIsOpen
              ? "rotate-45 translate-x-2 translate-y-4 transition ease-out duration-500"
              : ""
          }`}
        />
        <div
          className={`h-1.5 w-10 bg-black rounded-3xl ${
            sideNavIsOpen ? "scale-01 transition ease-out duration-500" : ""
          }`}
        />
        <div
          className={`h-1.5 w-10 bg-black rounded-3xl ${
            sideNavIsOpen
              ? "rotate-135 -translate-y-[1.2rem] translate-x-2 ease-out duration-500"
              : ""
          }`}
        />
      </div>
      {sideNavIsOpen && <SideNav handleBurgerClick={handleBurgerClick} />}
    </>
  );
};

export default Burger;

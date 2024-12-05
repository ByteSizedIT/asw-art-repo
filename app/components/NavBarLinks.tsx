"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBarLinks = () => {
  const path = usePathname();

  // TODO: Add functionality for logout (use a hook, also utilised in Burger component?)
  function logOut() {}

  return (
    <div className="hidden md:flex items-center gap-10 z-10">
      <Link
        href="/about"
        className={`${
          path === "/about" ? "text-black" : "text-gray-500"
        } hover:text-black`}
      >
        ABOUT
      </Link>

      <Link
        href="/"
        className={`${
          path === "/" ? "text-black" : "text-gray-500"
        } hover:text-black`}
      >
        GALLERY
      </Link>

      {/* TODO: Make upload link conditional to admin.authState === true */}
      <Link
        href="/upload"
        className={`${
          path === "/upload" ? "text-black" : "text-gray-500"
        } hover:text-black`}
      >
        UPLOAD
      </Link>

      {/* TODO: Make login link conditional to authState === false  */}
      <Link
        href="/authentication/login"
        className={`${
          path === "/authentication/login" ? "text-black" : "text-gray-500"
        } hover:text-black`}
      >
        LOG IN
      </Link>

      {/* TODO: Make logout link conditional to authState === true */}
      <p
        className="text-gray-500 hover:text-black text-base cursor-pointer"
        onClick={logOut}
      >
        LOG OUT
      </p>
    </div>
  );
};
export default NavBarLinks;

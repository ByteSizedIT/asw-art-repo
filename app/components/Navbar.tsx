"use client";

import Image from "next/image";
import Link from "next/link";

import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();

  function handleLogOut() {}

  return (
    <div className="relative w-full flex items-center p-5 z-10">
      {" "}
      <Image
        className="mr-auto cursor-pointer"
        src="/pencil-logo-cropped.png"
        alt="Ninja logo"
        height="100"
        width="100"
        quality={100}
        onClick={() => router.push("/")}
        priority
      />
      <div className="flex items-center gap-10 z-10">
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
          onClick={handleLogOut}
        >
          LOG OUT
        </p>
      </div>
    </div>
  );
};
export default Navbar;

"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

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
      />
      <div></div>
    </div>
  );
};
export default Navbar;

import Link from "next/link";

const SideNav = ({ handleBurgerClick }: { handleBurgerClick: () => void }) => {
  function logOut() {
    // TODO: Add functionality for logout (use a hook, also utilised in Burger component?)
    handleBurgerClick();
  }

  return (
    <div
      className={`visible md:hidden w-6/12 h-screen bg-gray-400 bg-opacity-90 absolute top-0 right-0 -z-10 flex flex-col p-6 pt-32 gap-5 items-end`}
    >
      <Link href="/" className="text-black" onClick={handleBurgerClick}>
        GALLERY
      </Link>
      <Link href="/about" className="text-black" onClick={handleBurgerClick}>
        ABOUT
      </Link>
      {/* TODO: Make upload link conditional to admin.authState === true */}
      <Link href="/upload" className="text-black" onClick={handleBurgerClick}>
        UPLOAD
      </Link>

      {/* TODO: Make login link conditional to authState === false  */}
      <Link
        href="/authentication/login"
        className="text-black"
        onClick={handleBurgerClick}
      >
        LOG IN
      </Link>

      {/* TODO: Make logout link conditional to authState === true */}
      <p className="text-black  text-base cursor-pointer" onClick={logOut}>
        LOG OUT
      </p>
    </div>
  );
};
export default SideNav;

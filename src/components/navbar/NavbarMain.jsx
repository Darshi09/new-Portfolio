import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      {/* Main Navbar Container */}
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border border-[#ba68c8]">
        <NavbarLogo />

        {/* Responsive Links */}
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        <NavbarBtn />
      </div>

      {/* Mobile Toggler */}
      <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border border-[#ba68c8]">
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;

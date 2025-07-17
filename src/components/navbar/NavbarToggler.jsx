import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <button
      className="text-2xl p-3 border border-[#ba68c8] text-[#ec407a] hover:text-white hover:bg-gradient-to-r from-[#8e24aa] to-[#ec407a] transition-all duration-300 rounded-full"
      onClick={setToggleMenu}
    >
      <GiHamburgerMenu />
    </button>
  );
};

export default NavbarToggler;

import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-[#f8e1ff] font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl backdrop-blur-lg sm:w-full py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group relative transition-all duration-500">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-[#f8e1ff] hover:text-[#e040fb] transition-colors duration-300"
            >
              {link.link}
            </Link>
            <div className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-gradient-to-r from-[#8e24aa] to-[#ec407a] group-hover:w-full transition-all duration-500 rounded-full"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;

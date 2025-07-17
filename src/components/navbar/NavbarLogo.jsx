const NavbarLogo = () => {
  return (
    <div>
      {/* Full name for desktop */}
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#8e24aa] to-[#ec407a] text-2xl sm:hidden md:block font-bold">
        Darshi Shah
      </h1>

      {/* Initials for mobile */}
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#8e24aa] to-[#ec407a] font-special font-extrabold text-4xl md:hidden sm:block">
        DS
      </h1>
    </div>
  );
};

export default NavbarLogo;

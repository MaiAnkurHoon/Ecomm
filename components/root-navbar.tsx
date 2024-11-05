import React from "react";

import MainNavbarLinks from "./Main-Navbar";
import MobileFilters from "./mobile-filter";
  

const MainNavbar = () => {
  return (
    <nav className="">
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Company Name */}
        <div className="lg:text-3xl  sm:text-2xl font-semibold">
          Galaxy Tiles and Ceramics
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex flex-1 justify-center">
          <MainNavbarLinks />
        </div>
        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
         <MobileFilters />
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;

 



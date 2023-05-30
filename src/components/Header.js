import React from "react";

import Logo from "../assets/new-logo.svg.png";

const Header = () => {
  return (
    <header className="py-2 pt-[40px]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <img
              className="h-10 rounded-lg border-solid border-2 border-sky-500 "
              src={Logo}
              alt="logo"
            />
          </div>
          <div>
            <button className="btn btn-lg">My Portfolio</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

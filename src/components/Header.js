import React from "react";

import Logo from "../assets/new-logo.svg.png";

const Header = () => {
  return (
    <header className="py-2 h-[15vh]">
      <div className="flex justify-between p-container items-center mt-8">
        <div>
          <img
            className="h-10 rounded-lg border-solid border-2 border-sky-500"
            src={Logo}
            alt="logo"
          />
        </div>
        <div>
          <a
            href="https://shivang_resume.tiiny.site/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-lg">My Portfolio</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

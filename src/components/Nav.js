import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";

import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed h-[15vh] p-container">
      <div className="bg-[#012a4a] opacity-75 h-[80px] md:h-[70px] backdrop-blur-2xl rounded-full max-w-[400px] md:max-w-[300px] mx-auto p-5 z-70 flex justify-between items-center text-2xl md:text-1xl text-white/50 md:mt-10">
        <Link
          to="home"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BiHomeAlt />
        </Link>
        <Link
          to="about"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BiUser />
        </Link>
        <Link
          to="services"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BsClipboardData />
        </Link>
        <Link
          to="work"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BsBriefcase />
        </Link>
        <Link
          to="contact"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BsChatSquareText />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

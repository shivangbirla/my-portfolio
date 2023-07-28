import React from "react";
import Image from "../assets/shivang-profile.png";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="h-[60vh]" id="home">
      {/* <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12"> */}
      {/* text */}
      <div className="p-container mt-[8vh] md:mb-[6vh]">
        <div className="flex-1 md:text-center font-secondary">
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="leading-[1] mb-2 ml-1 text-sky-400 md:text-[16px]"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[50px] md:text-[38px] font-bold leading-[1] text-[#ced4da] "
          >
            Shivang Birla.
          </motion.h1>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-6 text-[36px] md:text-[32px] font-secondary font-semibold leading-[1] "
          >
            <span className=" text-[#ced4da] mr-4">I am a</span>
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Designer",
                2000,
                "Web 3 Enthusiast",
                2000,
              ]}
              speed={50}
              className="text-sky-400"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.div>
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mt-10 mb-5 mx-auto md:text-[16px] text-[#adb5bd] md:mt-15 md:mb-20"
          >
            I'm an avid full stack developer, combining my passion for design
            with a relentless enthusiasm for crafting seamless and intuitive
            user experiences. From frontend to backend, I thrive on bringing
            ideas to life through elegant code and pixel-perfect designs.
          </motion.p>
        </div>
        <div className="flex flex-row items-center mt-8 gap-x-20 md:gap-x-12">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex max-w-max"
          >
            <button className="btn btn-lg md:btn-sm">Connect</button>
          </motion.div>
          {/* socials  */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex text-[30px] max-w-max md:text-[28px] gap-x-5 md:gap-x-4"
          >
            <a href="https://www.linkedin.com/in/shivang-birla-387254253/">
              <FaLinkedinIn className="transform hover:scale-110 duration-500" />
            </a>
            <a href="https://github.com/shivangbirla">
              <FaGithub className="transform hover:scale-110 duration-500" />
            </a>
            <a href="https://twitter.com/ShivangBirla">
              <FaTwitter className="transform hover:scale-110 duration-500" />
            </a>
            <a href="mailto:shivangbirla9999@gmail.com">
              <AiFillMail className="transform hover:scale-110 duration-500" />
            </a>
          </motion.div>
        </div>
      </div>
      {/* image */}
      {/* <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[300px] lg:max-w-[450px]  h-auto"
          >
            <img className="rounded-lg h-80" src={Image} alt="" />
          </motion.div> */}

      {/* </div> */}
    </section>
  );
};

export default Banner;

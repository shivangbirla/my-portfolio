import React from "react";
import Image from "../assets/shivang-profile.png";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto mt-0">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[18px]  leading-[1] lg:text-[22px] mb-2 ml-1 text-sky-400"
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[50px] font-bold leading-[1] text-[#ced4da] lg:text-[60px] "
            >
              Shivang Birla.
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold leading-[1] "
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
              className=" mt-10 mb-5 max-w-Ig mx-auto Ig:mx-0 text-[#adb5bd]"
            >
              I'm an avid full stack developer, combining my passion for design
              with a relentless enthusiasm for crafting seamless and intuitive
              user experiences. From frontend to backend, I thrive on bringing
              ideas to life through elegant code and pixel-perfect designs.
            </motion.p>
            <div className="flex flex-row  items-center gap-x-10">
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex max-w-max"
              >
                <h2 className="text-[32px] font-medium leading-[1] border-solid border-2 text-sky-400 border-sky-500 rounded-lg p-2">
                  Connect with me
                </h2>
              </motion.div>
              {/* socials  */}
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex text-[30px]   max-w-max gap-x-3.5"
              >
                <a href="https://www.linkedin.com/in/shivang-birla-387254253/">
                  <FaLinkedinIn />
                </a>
                <a href="https://github.com/shivangbirla">
                  <FaGithub />
                </a>
                <a href="https://twitter.com/ShivangBirla">
                  <FaTwitter />
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
        </div>
      </div>
    </section>
  );
};

export default Banner;

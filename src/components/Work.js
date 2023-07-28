import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import Img1 from "../assets/spotify-clone.png";
import Img2 from "../assets/weather-api.png";
import Img3 from "../assets/todo-app.png";
import Img4 from "../assets/nike-e-app.png";

const Work = () => {
  return (
    <section
      className="mt-[10vh] h-[100vh] pt-[18px] md:pt-[15px] md:mt-0"
      id="work"
    >
      <div className="flex p-container md:flex-col flex-row gap-x-40">
        <div className="w-[50vw] md:w-full">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-6 mb-8"
          >
            <div>
              <h2 className="h2 md:text-[24px] leading-tight  text-accent">
                My Latest Work.
              </h2>
              <p className="max-w-sm mb-4 text-[#ced4da] md:text-[16.5px]">
                Here is a showcase of some of the projects that I have made, You
                can find the source code on my GitHub :)
              </p>
              <button className="btn btn-sm text-[#ced4da] mt-4 md:ml-6">
                <a href="https://github.com/shivangbirla">View my projects</a>
              </button>
            </div>
          </motion.div>
        </div>
        <div className="custom-scrollbar max-h-[80vh] overflow-y-auto w-[50vw] md:w-[80vw] md:mx-auto md:h-[50vh]">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-8"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute transition-all duration-300"></div>
              <img
                className="group-hover:scale-120 transition-all duration-500"
                src={Img4}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-10 ">
                <a
                  className="h3 leading-tight text-[#54B4D3]"
                  href="https://nike-e-app.vercel.app/"
                >
                  Nike-e-App
                </a>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-10">
                <span className="text-3xl text-white"></span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute transition-all duration-300"></div>
              <img
                className="group-hover:scale-120 transition-all duration-500"
                src={Img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-10 ">
                <a
                  className="h3 leading-tight text-[#54B4D3]"
                  href="https://spotify-clone-hazel-sigma.vercel.app/"
                >
                  Spotify-Clone
                </a>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-10">
                <span className="text-3xl text-white"></span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute transition-all duration-300"></div>
              <img
                className="group-hover:scale-120 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-10 ">
                <a
                  className="h3 leading-tight text-[#54B4D3]"
                  href="https://weather-app-lovat-nu.vercel.app/"
                >
                  Weather-API
                </a>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-10">
                <span className="text-3xl text-white"></span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute transition-all duration-300"></div>
              <img
                className="group-hover:scale-120 transition-all duration-500"
                src={Img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-10">
                <a
                  className="h3 leading-tight text-[#54B4D3]"
                  href="https://todolist-react-six-steel.vercel.app/"
                >
                  ToDo-App
                </a>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-10">
                <span className="text-3xl text-white"> </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;

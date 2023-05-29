import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import Img1 from "../assets/spotify-clone.png";
import Img2 from "../assets/weather-api.png";
import Img3 from "../assets/todo-app.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-5 mb-8 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight  text-accent">My Latest Work.</h2>
              <p className="max-w-sm mb-4 text-[#ced4da]">
                I have made some complex React projects like Spotify Clone,
                Weather API and also have made some simpler one like Meme
                Generator, ToDo App, Calculator.
              </p>
              <button className="btn btn-sm text-[#ced4da]">
                <a href="https://github.com/shivangbirla">View my projects</a>
              </button>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl h-auto w-[500px]">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <a
                  href="https://spotify-clone-hazel-sigma.vercel.app/"
                  className="h3 leading-tight text-[#54B4D3]"
                >
                  Spotify-clone
                </a>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white"></span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-5"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl h-auto w-[500px]">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <a
                  className="h3 leading-tight text-[#54B4D3]"
                  href="https://weather-app-lovat-nu.vercel.app/"
                >
                  Weather-API
                </a>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white"></span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl h-auto w-[500px]">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <a
                  className="h3 leading-tight text-[#54B4D3]"
                  href="https://todolist-react-six-steel.vercel.app/"
                >
                  ToDo-App
                </a>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
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

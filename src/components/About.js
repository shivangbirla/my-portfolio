import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          {/* <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div> */}
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4 text-[#ced4da]">
              I'm a second-year student at Manipal University Jaipur pursuing my
              B.Tech with a deep interest in technology.
            </h3>
            <p className="flex gap-x-6 lg:gap-x-10 mb-4 text-[#ced4da]">
              As a MERN stack developer, I specialize in building web
              applications using MongoDB, Express.js, React, and Node.js,
              leveraging the power of JavaScript throughout the entire
              development stack.
            </p>
            <p className="flex gap-x-6 lg:gap-x-10 mb-12 text-[#ced4da]">
              As a UI/UX designer, I combine my creativity and user-centered
              design principles to create visually appealing and intuitive
              interfaces that enhance user experiences and drive engagement with
              digital products.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 text-accent">
                  {inView ? <CountUp start={0} end={1} duration={1} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px] text-[#ced4da]">
                  {" "}
                  Year of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 text-accent">
                  {inView ? <CountUp start={0} end={8} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px] text-[#ced4da]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 text-accent">
                  {inView ? <CountUp start={0} end={600} duration={3} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px] text-[#ced4da]">
                  Hours of
                  <br />
                  Coding
                </div>
              </div>
            </div>{" "}
            {/* <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg ">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

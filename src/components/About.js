import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <section
      className="mt-[10vh] h-[100vh] pt-[30px] md:pt-[20px]"
      id="about"
      ref={ref}
    >
      <div className="p-container">
        <div className="flex flex-col gap-y-10 md:gap-y-8">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent md:text-[26px]">About me.</h2>
            <h3 className="h3 mb-4 text-[#ced4da] md:text-[18px]">
              I'm a second-year student at Manipal University Jaipur pursuing my
              B.Tech with a deep interest in technology.
            </h3>
            <p className="flex gap-x-6 mb-4 text-[#ced4da] md:mb-3 md:text-[16px]">
              As a MERN stack developer, I specialize in building web
              applications using MongoDB, Express.js, React, and Node.js,
              leveraging the power of JavaScript throughout the entire
              development stack.
            </p>
            <p className="flex gap-x-6 mb-12 text-[#ced4da] md:mb-10 md:text-[16px]">
              As a UI/UX designer, I combine my creativity and user-centered
              design principles to create visually appealing and intuitive
              interfaces that enhance user experiences and drive engagement with
              digital products.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 mb-12 md:gap-x-8">
              <div>
                <div className="text-[40px] md:text-[30px] font-tertiary text-gradient mb-2 text-accent">
                  {inView ? <CountUp start={0} end={1} duration={1} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px] text-[#ced4da] md:text-[12px]">
                  {" "}
                  Year of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] md:text-[30px] font-tertiary text-gradient mb-2 text-accent">
                  {inView ? <CountUp start={0} end={8} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm md:text-[12px] tracking-[2px] text-[#ced4da]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 text-accent md:text-[30px]">
                  {inView ? <CountUp start={0} end={600} duration={3} /> : null}
                  +
                </div>
                <div className="font-primary text-sm md:text-[12px] tracking-[2px] text-[#ced4da]">
                  Hours of
                  <br />
                  Coding
                </div>
              </div>
            </div>{" "}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Full Stack Development",
    description:
      "Full stack development covers both the front-end and back-end aspects of web development, enabling versatile and comprehensive skill sets.",
    link: "learn more",
  },
  {
    name: "UI/UX Design",
    description:
      "UI/UX designers create visually appealing and user-friendly interfaces to enhance digital experiences.",
    link: "learn more",
  },
  {
    name: "Open Source Contributor",
    description:
      "Open source contributors actively engage in enhancing open source projects, fostering collaboration, and driving innovation within the community.",
    link: "learn more",
  },
  // {
  //   name: "WEB 3.0",
  //   description:
  //     "Web 3 offers developers a decentralized and interoperable platform, empowering them to build innovative applications that prioritize privacy, security, and user control over data.",
  // },
];

const Services = () => {
  return (
    <section
      className="mt-[10vh] h-[100vh] pt-[10px] md:pt-[20px]"
      id="services"
    >
      <div className="p-container">
        <div className="flex flex-col">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent mb-3 mt-2 md:text-[24px]">
              What I Do.
            </h2>
            <h3 className="h3 max-w-[455px] mb-6 text-[#ced4da] md:text-[20px]">
              I develop and design things...
            </h3>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b text-grey h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] md:text-[18px] tracking-wider font-primary font-semibold mb-4 text-[#ced4da]">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight text-[#adb5bd] md:text-[16px]">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mt-[2px] flex justify-center items-center md:h-7 md:w-7 md:mr-1"
                      >
                        <BsArrowUpRight />
                      </a>
                      {/* <a href="#" className="text-gradient text-sm">
                        {link}
                      </a> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

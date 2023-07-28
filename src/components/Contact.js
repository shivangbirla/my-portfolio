import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section
      className="mt-[40vh] h-[100vh] pt-[45px] md:pt-[10px] md:mt-0"
      id="contact"
    >
      <div className="flex md:flex-col flex-row p-container">
        {/* text */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex justify-start items-center"
        >
          <div>
            <h4 className="text-[22px] uppercase text-accent font-medium ml-2 mb-2 tracking-wide md:mb-1">
              Get in touch
            </h4>
            <h2 className="text-[45px] leading-none ml-1 mb-12 text-[#ced4da] md:mb-8">
              Let's work <br /> together
            </h2>
          </div>
        </motion.div>
        {/* form */}

        <motion.form
          target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/shivangbirla9999@gmail.com"
          method="POST"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 border rounded-2xl border-[#ced4da] flex flex-col gap-y-5 pb-10 p-6 items-start md:gap-y-0"
        >
          <input
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-[#adb5bd] focus:border-accent transition-all"
            type="text"
            name="name"
            placeholder="Your name"
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.name && (
            <p className="text-blue-500 mt-1">
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" && "Max length is 100 char."}
            </p>
          )}
          <input
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-[#adb5bd] focus:border-accent transition-all"
            type="email"
            name="email"
            placeholder="Your email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className="text-blue-500 mt-1">
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Invalid email address."}
            </p>
          )}
          <textarea
            className="bg-transparent border-b py-0 outline-none w-full placeholder:text-[#adb5bd] focus:border-accent transition-all resize-none mb-12"
            placeholder="Your message"
            type="text"
            name="message"
            rows="4"
            cols="50"
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
          />
          {errors.message && (
            <p className="text-blue-500 mt-1">
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLength" &&
                "Max length is 2000 char."}
            </p>
          )}
          <button type="submit" className="btn btn-lg text-[#adb5bd] mt-0">
            Send
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

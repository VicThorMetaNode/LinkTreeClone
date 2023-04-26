import React from "react";
//IMPORT FRAMER MOTION FOR ANIMATION
import { motion } from "framer-motion";
//IMPORT ANIMATIONS
import { staggerContainer, fadeIn } from "../utils/motion";

//IMPORT ICONS
import {
  GrInstagram,
  GrTwitter,
  GrLinkedinOption,
  GrGithub,
} from "react-icons/gr";
import { FiMonitor } from "react-icons/fi";
const Links = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        <section className="flex flex-col justify-center items-center mb-10">
          <motion.div variants={fadeIn("up", "tween", 0.5, 0.5)}>
            <a
              href="https://www.instagram.com/metanodeslabs/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-main text-xl"
            >
              <button className="flex items-center justify-start gap-5 px-8 py-2 mt-5 bg-gris text-white rounded-xl w-[13rem] md:w-[20rem] md:gap-20 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-110 duration-[500ms] ease-out hover:bg-alt-gris hover:gap-[7rem]">
                <GrInstagram size="1.5rem" className="text-turquoise" />
                Instagram
              </button>
            </a>
          </motion.div>
          <motion.div variants={fadeIn("up", "tween", 0.7, 0.5)}>
            <a
              href="https://www.instagram.com/metanodeslabs/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-main text-xl"
            >
              <button className="flex items-center justify-start gap-5 px-8 py-2 mt-5 bg-gris text-white rounded-xl w-[13rem] md:w-[20rem] md:gap-20 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-110 duration-[500ms] ease-out hover:bg-alt-gris hover:gap-[7rem]">
                <GrTwitter size="1.5rem" className="text-turquoise" />
                Twitter
              </button>
            </a>
          </motion.div>
          <motion.div variants={fadeIn("up", "tween", 0.9, 0.5)}>
            <a
              href="https://www.instagram.com/metanodeslabs/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-main text-xl"
            >
              <button className="flex items-center justify-start gap-5 px-8 py-2 mt-5 bg-gris text-white rounded-xl w-[13rem] md:w-[20rem] md:gap-20 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-110 duration-[500ms] ease-out hover:bg-alt-gris hover:gap-[7rem]">
                <GrLinkedinOption size="1.5rem" className="text-turquoise" />
                Linkedin
              </button>
            </a>
          </motion.div>
          <motion.div variants={fadeIn("up", "tween", 1.1, 0.5)}>
            <a
              href="https://www.instagram.com/metanodeslabs/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-main text-xl"
            >
              <button className="flex items-center justify-start gap-5 px-8 py-2 mt-5 bg-gris text-white rounded-xl w-[13rem] md:w-[20rem] md:gap-20 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-110 duration-[500ms] ease-out hover:bg-alt-gris hover:gap-[7rem]">
                <GrGithub size="1.5rem" className="text-turquoise" />
                Github
              </button>
            </a>
          </motion.div>
          <motion.div variants={fadeIn("up", "tween", 1.3, 0.5)}>
            <a
              href="https://www.instagram.com/metanodeslabs/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-main text-xl"
            >
              <button className="flex items-center justify-start gap-5 px-8 py-2 mt-5 bg-gris text-white rounded-xl w-[13rem] md:w-[20rem] md:gap-20 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-110 duration-[500ms] ease-out hover:bg-alt-gris hover:gap-[7rem]">
                <FiMonitor size="1.5rem" className="text-turquoise" />
                Website
              </button>
            </a>
          </motion.div>
        </section>
      </motion.div>
    </>
  );
};

export default Links;

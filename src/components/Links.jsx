import React from "react";
//IMPORT FRAMER MOTION FOR ANIMATION
import { motion } from "framer-motion";
//IMPORT ANIMATIONS
import { staggerContainer, fadeIn } from "../utils/motion";

//IMPORT ICONS
import { GrInstagram, GrLinkedinOption } from "react-icons/gr";
import { FiMonitor } from "react-icons/fi";
import { SiOpensea } from "react-icons/si";
import { BiNews } from "react-icons/bi";

const Links = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        <section className="flex flex-col justify-center items-center pb-10">
          <motion.div variants={fadeIn("up", "tween", 0.5, 0.5)}>
            <a
              href="https://www.instagram.com/metanodeslabs/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-main text-xl"
            >
              <button className="flex items-center justify-start gap-5 px-8 py-2 mt-5 bg-gris text-white rounded-xl w-[13rem] md:w-[20rem] md:gap-20 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] md:hover:scale-120 duration-[500ms] ease-out hover:bg-alt-gris md:hover:gap-[7rem]">
                <GrInstagram size="1.5rem" className="text-turquoise" />
                Instagram
              </button>
            </a>
          </motion.div>
          <motion.div variants={fadeIn("up", "tween", 0.7, 0.5)}>
            <a
              href="https://www.linkedin.com/company/blockchainsucks/"
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
          <motion.div variants={fadeIn("up", "tween", 0.9, 0.5)}>
            <a
              href="https://opensea.io/titathor"
              target="_blank"
              rel="noopener noreferrer"
              className="font-main text-xl"
            >
              <button className="flex items-center justify-start gap-5 px-8 py-2 mt-5 bg-gris text-white rounded-xl w-[13rem] md:w-[20rem] md:gap-20 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-110 duration-[500ms] ease-out hover:bg-alt-gris hover:gap-[7rem]">
                <SiOpensea size="1.5rem" className="text-turquoise" />
                OpenSea
              </button>
            </a>
          </motion.div>

          <motion.div variants={fadeIn("up", "tween", 1.1, 0.5)}>
            <a
              href="https://cryptosucks.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-main text-xl"
            >
              <button className="flex items-center justify-start gap-5 px-8 py-2 mt-5 bg-gris text-white rounded-xl w-[13rem] md:w-[20rem] md:gap-20 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-110 duration-[500ms] ease-out hover:bg-alt-gris hover:gap-[7rem]">
                <BiNews size="1.5rem" className="text-turquoise" />
                News
              </button>
            </a>
          </motion.div>
          <motion.div variants={fadeIn("up", "tween", 1.3, 0.5)}>
            <a
              href="https://blockchainsucks.vercel.app/"
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

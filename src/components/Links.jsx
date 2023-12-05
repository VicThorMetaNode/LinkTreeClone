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
          <motion.div variants={fadeIn("up", "tween", 0.9, 0.5)}>
            <a
              href="https://www.instagram.com/metanodelabs/"
              target="_self"
              rel="noopener noreferrer"
              className="font-main text-xl"
            >
              <button className="flex items-center justify-start gap-5 px-8 py-2 mt-5 bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 text-vamp font-ibm uppercase rounded-xl w-[13rem] md:w-[20rem] md:gap-20 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] md:hover:scale-120 duration-[500ms] ease-out hover:bg-alt-gris md:hover:gap-[7rem]">
                <GrInstagram size="1.5rem" className="text-vamp" />
                Instagram
              </button>
            </a>
          </motion.div>
          <motion.div variants={fadeIn("up", "tween", 1.0, 0.5)}>
            <a
              href="https://www.linkedin.com/company/metanodelabs"
              target="_self"
              rel="noopener noreferrer"
              className="font-main text-xl"
            >
              <button className="flex items-center justify-start gap-5 px-8 py-2 mt-5 bg-gradient-to-bl from-gray-200 via-gray-400 to-gray-600 text-vamp font-ibm uppercase rounded-xl w-[13rem] md:w-[20rem] md:gap-20 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] md:hover:scale-120 duration-[500ms] ease-out hover:bg-alt-gris md:hover:gap-[7rem] ">
                <GrLinkedinOption size="1.5rem" className="text-vamp" />
                Linkedin
              </button>
            </a>
          </motion.div>
          {/* <motion.div variants={fadeIn("up", "tween", 0.9, 0.5)}>
            <a
              href="https://opensea.io/titathor"
              target="_self"
              rel="noopener noreferrer"
              className="font-main text-xl"
            >
              <button className="flex items-center justify-start gap-5 px-8 py-2 mt-5 bg-gradient-to-t from-green-300 via-yellow-300 to-pink-300 text-white rounded-xl w-[13rem] md:w-[20rem] md:gap-20 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-110 duration-[500ms] ease-out hover:bg-alt-gris hover:gap-[7rem]">
                <SiOpensea size="1.5rem" className="text-turquoise" />
                OpenSea
              </button>
            </a>
          </motion.div>

          <motion.div variants={fadeIn("up", "tween", 1.1, 0.5)}>
            <a
              href="https://cryptosucks.vercel.app/"
              target="_self"
              rel="noopener noreferrer"
              className="font-main text-xl"
            >
              <button className="flex items-center justify-start gap-5 px-8 py-2 mt-5 bg-gradient-to-b from-green-300 via-yellow-300 to-pink-300 text-white rounded-xl w-[13rem] md:w-[20rem] md:gap-20 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] md:hover:scale-120 duration-[500ms] ease-out hover:bg-alt-gris md:hover:gap-[7rem]">
                <BiNews size="1.5rem" className="text-turquoise" />
                News
              </button>
            </a>
          </motion.div> */}
          <motion.div variants={fadeIn("up", "tween", 1.1, 0.5)}>
            <a
              href="https://metanodelabs-alpha.vercel.app/"
              target="_self"
              rel="noopener noreferrer"
              className="font-main text-xl"
            >
              <button className="flex items-center justify-start gap-5 px-8 py-2 mt-5 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600 text-vamp font-ibm uppercase rounded-xl w-[13rem] md:w-[20rem] md:gap-20 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] md:hover:scale-120 duration-[500ms] ease-out hover:bg-alt-gris md:hover:gap-[7rem]">
                <FiMonitor size="1.5rem" className="text-vamp" />
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

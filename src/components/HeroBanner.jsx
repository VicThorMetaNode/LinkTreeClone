import React from "react";

//IMPORT FRAMER MOTION FOR ANIMATION
import { motion } from "framer-motion";
//IMPORT ANIMATIONS
import { staggerContainer, zoomIn } from "../utils/motion";

//importer la photo
import { avatar } from "../assets";

const HeroBanner = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      viewport={{ once: true }}
    >
      <section className="flex flex-col pt-5 md:pt-10 justify-center items-center">
        <motion.div variants={zoomIn(0.1, 0.3)}>
          <div className="w-[10rem] h-[10rem] md:w-[13rem] md:h-[13rem] mb-2 md:mb-4">
            <img
              src={avatar}
              alt=""
              className="rounded-full shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
            />
          </div>
        </motion.div>

        <motion.div variants={zoomIn(0.2, 0.5)}>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            {" "}
            <h1 className="font-main text-white font-bold text-xl md:text-2xl hover:text-turquoise transition duration-500 hover:scale-100">
              @blockchainsucks
            </h1>
          </a>
        </motion.div>
        <motion.div
          variants={zoomIn(0.3, 0.5)}
          className="flex justify-center item-center mb-3 "
        >
          <h2 className="font-sub text-white text-md md:text-xl italic text-center w-[80%] md:w-[100%]">
            "Web Dev for rebel creators & unorthodox community builders"{" "}
          </h2>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default HeroBanner;

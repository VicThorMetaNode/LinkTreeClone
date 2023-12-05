import React from "react";

//IMPORT FRAMER MOTION FOR ANIMATION
import { motion } from "framer-motion";
//IMPORT ANIMATIONS
import { staggerContainer, zoomIn } from "../utils/motion";

//importer la photo
import { avatar, logo } from "../assets";

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
              src={logo}
              alt=""
              className="rounded-full shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
            />
          </div>
        </motion.div>

        <motion.div variants={zoomIn(0.2, 0.5)}>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            {" "}
            <h1 className="font-main text-white font-bold text-xl md:text-2xl hover:text-turquoise transition duration-500 hover:scale-100">
              @metanodelabs
            </h1>
          </a>
        </motion.div>

        <motion.div
          variants={zoomIn(0.3, 0.6)}
          className="flex justify-center item-center "
        >
          <h2 className="font-sub font-black text-turquoise text-md md:text-xl  text-center  md:w-[100%] uppercase my-3">
            security - privacy - hacktivism
          </h2>
        </motion.div>
        <motion.div
          variants={zoomIn(0.4, 0.8)}
          className="flex  justify-center item-center"
        >
          <h3 className="font-sub  text-white text-md md:text-xl italic text-center w-[80%] md:w-[100%]">
            "from weak to robust : transform your teams into digital defenders"
          </h3>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default HeroBanner;

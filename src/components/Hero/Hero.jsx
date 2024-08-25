import React from "react";
import { FaPlay } from "react-icons/fa";
import HeroImg from "../../assets/dumbell.png";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/animation";

const Hero = () => {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[500px] relative">
          {/* Brand Info */}
          <div className="flex flex-col justify-center py-14 md:py-0">
            <div className="text-center md:text-left space-y-6">
              <motion.h1
                variants={SlideRight(0.6)}
                initial="hidden"
                animate="visible"
                className="text-5xl lg:text-6xl font-bold leading-relative xl:leading-normal font-playfair"
              >
                Gym Gives you the perfect{" "}
                <span className="text-primary">Health</span>
              </motion.h1>
              <motion.p
                variants={SlideRight(1.2)}
                initial="hidden"
                animate="visible"
                className="text-gray-600 xl:max-w-[500px]"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                maxime sunt tempora, eaque nisi modi.
              </motion.p>
              {/* button */}
              <motion.div
                variants={SlideRight(1.5)}
                initial="hidden"
                animate="visible"
                className="flex justify-center gap-8 md:justify-start items-center !mt-4"
              >
                <button className="primary-btn flex items-center gap-2 ">
                  Order Now
                </button>
                <button className=" flex items-center gap-2 justify-center">
                  <FaPlay /> Watch Now
                </button>
              </motion.div>
            </div>
          </div>
          {/* Hero Image */}
          <div className="flex justify-center items-center">
            <motion.img
              variants={SlideLeft(1.6)}
              initial="hidden"
              animate="visible"
              className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow"
              src={HeroImg}
              alt="hero image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

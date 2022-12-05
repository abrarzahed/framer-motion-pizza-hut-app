import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animation1: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  animation2: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
};

export default function Loader() {
  const [animation, cycleAnimation] = useCycle("animation1", "animation2");

  return (
    <>
      <motion.div
        variants={loaderVariants}
        animate={animation}
        className="loader"
      ></motion.div>
      <div className="cycle" onClick={() => cycleAnimation()}>
        Cycle Loader
      </div>
    </>
  );
}

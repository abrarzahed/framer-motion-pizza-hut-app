import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const buttonVariants = {
  initial: {
    y: "-100vh",
    opacity: 0,
  },
  animate: {
    y: 200,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

export default function Model({ showModel, setShowModel }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModel && (
        <motion.div
          variants={backdropVariants}
          animate="animate"
          initial="initial"
          className="backdrop"
          exit="initial"
        >
          <motion.div variants={buttonVariants} className="modal">
            <div>
              <p>Want to make another pizza?</p>
              <Link to="/">
                <button>Start Again</button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

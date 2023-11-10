import React from "react";
import { animate, motion } from "framer-motion";

const Animation = {
  initial: { opacity: 0, y: -5 },
  animate: { opacity: 1, y: 0 },
};

function PageLoad({ children }) {
  return (
    <motion.div
      variants={Animation}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default PageLoad;

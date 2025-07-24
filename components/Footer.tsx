"use client";

import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.div
      initial={{
        filter: "blur(10px)",
        opacity: 0,
        scale: 0.98,
      }}
      animate={{
        filter: "blur(0px)",
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="absolute bottom-0 mt-[60px] w-full pt-4 pb-2 text-center text-xs text-neutral-800 shadow-[0px_-1px_2px_rgba(220,220,220)]"
    >
      &copy; Aryan Gusain {new Date().getFullYear()}
    </motion.div>
  );
};
export default Footer;

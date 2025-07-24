"use client";

import Link from "next/link";
import { motion } from "motion/react";

const Navbar = () => {
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
        duration: 0.3,
      }}
      className="md:text-md mb-[60px] flex w-full items-center justify-center gap-[20px] py-4 text-xs text-neutral-800 shadow-sm sm:gap-[40px] sm:py-6 sm:text-sm md:gap-[50px] md:text-base"
    >
      <Link href="">
        <div>Home</div>
      </Link>
      <Link href="">
        <div>Projects</div>
      </Link>
      <Link href="">
        <div>Experience</div>
      </Link>
    </motion.div>
  );
};
export default Navbar;

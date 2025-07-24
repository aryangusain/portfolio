"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const SocialIcon = ({
  children,
  url,
  className,
}: {
  children: React.ReactNode;
  url: string;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
      transition={{
        duration: 0.3,
      }}
      className={cn(
        "flex cursor-pointer items-center justify-center rounded-full bg-neutral-800 p-1.5 md:p-1",
        className,
      )}
    >
      <Link href={url} target="_blank">
        {children}
      </Link>
    </motion.div>
  );
};
export default SocialIcon;

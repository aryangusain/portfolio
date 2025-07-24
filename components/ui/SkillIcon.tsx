import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const SkillIcon = ({ url, className }: { url: string; className?: string }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 2px 5px 0px rgba(213, 184, 255)",
      }}
      transition={{
        duration: 0.2,
      }}
      className={cn(className)}
    >
      <img src={url} className="h-5 cursor-pointer shadow-xl sm:h-7" />
    </motion.div>
  );
};
export default SkillIcon;

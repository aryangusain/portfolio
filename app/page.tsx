"use client";

import GradientCloud from "@/components/ui/GradientCloud";
import SkillIcon from "@/components/ui/SkillIcon";
import SocialIcon from "@/components/ui/SocialIcon";
import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import { motion } from "motion/react";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-[50px]">
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
          duration: 0.4,
        }}
        className="flex items-center gap-[10px] sm:gap-[20px] md:gap-[40px]"
      >
        <motion.img
          whileHover={{
            scale: 1.02,
          }}
          transition={{
            duration: 0.3,
          }}
          src="/aryan.jpg"
          width={20}
          height={20}
          className="h-auto w-[10rem] rounded-full shadow-md sm:w-[14rem] md:w-[16rem]"
          alt="My Image"
        />
        <div className="flex flex-col gap-[4px] text-neutral-800 sm:gap-[6px] md:gap-[8px]">
          <motion.h1
            whileHover={{
              scale: 1.01
            }}
            transition={{
              duration: 0.3,
            }}
            className="-mb-1 cursor-pointer text-[20px] font-bold sm:text-[26px] md:text-[30px]">
            Aryan Gusain
          </motion.h1>
          <motion.h2
            whileHover={{
              scale: 1.01
            }} 
            transition={{
              duration: 0.3,
            }}
            className="mb-1  cursor-pointertext-[14px] font-semibold sm:text-[18px] md:text-[20px]">
            Web Developer
          </motion.h2>

          <div className="flex gap-[4px] sm:gap-[6px] md:gap-[8px]">
            <SocialIcon url="https://github.com/aryangusain">
              <IconBrandGithub className="size-4 stroke-white sm:size-5 md:size-6" />
            </SocialIcon>
            <SocialIcon
              url="https://x.com/aryangusain_"
              className="p-2 md:p-1.5"
            >
              <IconBrandX className="size-3 stroke-white sm:size-4 md:size-5" />
            </SocialIcon>
            <SocialIcon url="https://linkedin.com/in/aryangusain">
              <IconBrandLinkedin className="size-4 stroke-white sm:size-5 md:size-6" />
            </SocialIcon>
          </div>
        </div>
      </motion.div>

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
          duration: 0.5,
        }}
        className="flex w-80 flex-wrap justify-center gap-[4px] sm:w-120 md:w-150"
      >
        <SkillIcon url="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
        <SkillIcon url="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
        <SkillIcon url="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
        <SkillIcon url="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
        <SkillIcon url="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
        <SkillIcon url="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
        <SkillIcon url="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
        <SkillIcon url="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
        <SkillIcon url="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
        <SkillIcon url="https://img.shields.io/badge/WebSockets-2C9AB7?style=for-the-badge&logo=websockets&logoColor=white" />
        <SkillIcon url="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
        <SkillIcon url="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
        <SkillIcon url="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
      </motion.div>
    </div>
  );
}

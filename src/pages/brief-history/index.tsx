'use client'

import Section from "@/components/section";
import {motion} from 'motion/react';
import { useState } from "react";
import useMousePosition from "@/hooks/useMousePosition";
import Tag from "./tag";
import ImageProfile from "@/components/image-profile";

const BriefHistory = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const { x,y } = useMousePosition()
  const size = isHovered ? 400 : 40

  return (
    <Section>
      <motion.div className="flex justify-between items-center absolute left-0 top-0 w-full">
        <ImageProfile src="mr-big2.jpg" cn="w-[120px] md:w-[300px] h-[70px] md:h-[200px]" />
        <ImageProfile src="mr-big3.jpg" cn="w-[120px] md:w-[350px] h-[70px] md:h-[200px]" />
      </motion.div>
      <div className="h-[60vh] md:h-screen">
        <motion.div
          className="mask-wrapper mask"
          animate={{
            WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{type:'tween', ease: "easeOut", duration:0.4}}
        >
          <p className="mask-paragraph" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>However, internal conflicts and differing musical directions led to the band's disbandment in 2002. They reunited in 2009 and have since released several albums and toured globally.</p>
        </motion.div>
        <div className="mask-wrapper z-0">
          <p className="mask-paragraph text-red-700">Mr.Big is also known for their instrumental skills, particularly <span className="text-softwhite ">Billy Sheehan</span>'s bass solos and <span className="text-softwhite">Paul Gilbert</span>'s guitar techniques. Their music combines hard rock and blues, with strong melodies and harmonies.</p>
        </div>
      </div>
      <div className="absolute bottom-0 w-full flex flex-wrap md:flex-nowrap justify-between items-start">
        <Tag text="ROCK" />
        <Tag text="ALTERNATIVE ROCK" color="cyan" />
        <Tag text="HARD ROCK" />
        <Tag text="BLUES" />
        <Tag text="GLAM METAL" color="amber" />
      </div>
    </Section>
  )
}

export default BriefHistory;

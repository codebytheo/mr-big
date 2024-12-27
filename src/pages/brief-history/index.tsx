'use client'

import Section from "@/components/section";
import Image from "next/image";
import {motion} from 'framer-motion';
import { useState } from "react";
import useMousePosition from "@/hooks/useMousePosition";

const BriefHistory = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const { x,y } = useMousePosition()
  const size = isHovered ? 400 : 40

  return (
    <Section>
        <div className="flex justify-between items-center absolute left-0 top-0 w-full">
          <Image src="/img/mr-big2.jpg" alt="mr big" height={80} width={250} sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 33vw" className="object-cover" />
          <Image src="/img/mr-big3.jpg" alt="mr big" height={80} width={300} sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 33vw" className="object-cover" />
        </div>
        <div className="">
          <motion.div
            className="border mask-wrapper mask"
            animate={{
              WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
              WebkitMaskSize: `${size}px`,
            }}
            transition={{type:'tween', ease: "easeOut", duration:0.4}}
          >
            <p className="mask-paragraph" onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>However, internal conflicts and differing musical directions led to the band's disbandment in 2002. They reunited in 2009 and have since released several albums and toured globally.</p>
          </motion.div>
          <div className="mask-wrapper z-0">
              <p className="mask-paragraph text-red-700">Mr.Big is also known for their instrumental skills, particularly <span className="text-softwhite ">Billy Sheehan</span>'s bass solos and <span className="text-softwhite">Paul Gilbert</span>'s guitar techniques. Their music combines hard rock and blues, with strong melodies and harmonies.</p>
          </div>
        </div>
    </Section>
  )
}

export default BriefHistory;
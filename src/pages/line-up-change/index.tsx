'use client'

import { lineUpChange } from "@/assets/assets"
import ImageProfile from "@/components/image-profile"
import Section from "@/components/section"
import {Paragraph, TextTitle,TextRedSmall} from "@/components/text"
import useMobileSize from "@/hooks/useMobileSize"
import {motion,useScroll,useTransform} from 'motion/react'
import { useRef } from "react"

const LineUpChange = () => {
  const container = useRef(null)
  const isMobile = useMobileSize()
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start end', `${200}px`]
  })

  const scale = useTransform(scrollYProgress,[0,1],[1.4,1])

  return (
    <Section>
      <motion.div ref={container}>
        <div className="relative mb-10 md:mb-20">
          <TextTitle text="LINE-UP CHANGE" cn="text-[2.5rem] md:text-[9.3rem]" />
          <TextRedSmall text="& break-up" />
        </div>
        <div className="relative flex flex-col gap-4 md:gap-20">
          <div className="md:[&>:nth-child(1)]:w-1/2">
            <Paragraph text={lineUpChange[0].p} />
          </div>
          <motion.div className="relative md:absolute right-0 top-0 z-0"
          style={{scale : isMobile ? 1 : scale}}
          transition={{
            ease:'easeInOut'
          }}
          >
            <ImageProfile src="mr-big-2001.jpg" cn="object-cover w-[300px] md:w-[300px] h-[450px] md:h-[450px]"  />
          </motion.div>
          <div className="flex flex-col md:flex-row w-full space-x-0 md:space-x-20">
            <motion.div style={{
              scale : isMobile ? 1 : scale}}>
              <ImageProfile src="mr-big-1999.jpg" cn="w-[300px] md:w-[400px] h-[300px] md:h-[400px]" />
            </motion.div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <div className="w-full md:w-2/3">
                <Paragraph text={lineUpChange[1].p} />
              </div>
              <div>
                <Paragraph text={lineUpChange[2].p} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
  </Section>
  )
}

export default LineUpChange

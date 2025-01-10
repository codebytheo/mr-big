'use client'

import { lineUpChange } from "@/assets/assets"
import ImageProfile from "@/components/image-profile"
import Section from "@/components/section"
import {Paragraph, TextTitle,TextRedSmall} from "@/components/text"
import Image from "next/image"
import {motion,useScroll,useTransform} from 'motion/react'
import { useRef } from "react"

const LineUpChange = () => {
  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start end', `${300}px`]
  })

  const scale = useTransform(scrollYProgress,[0,1],[1.4,1])

  return (
    <Section>
      <motion.div ref={container}>
        <div className="relative mb-20">
          <TextTitle text="LINE-UP CHANGE" cn="text-[150px]" />
          <TextRedSmall text="& break-up" />
        </div>
        <div className="relative flex flex-col gap-20">
          <div className="[&>:nth-child(2)]:w-1/2 [&>:nth-child(1)]:w-1/3 [&>:nth-child(2)]:mt-2 [&>:nth-child(3)]:w-1/2 [&>:nth-child(3)]:mt-2">
            <Paragraph text={lineUpChange[0].p} />
          </div>
          <motion.div className="absolute right-0 top-0 z-0"
          style={{scale}}
          transition={{
            ease:'easeInOut'
          }}
          >
            <ImageProfile src="mr-big-2001.jpg" cn="object-cover w-[300px] h-[450px]"  />
          </motion.div>
          <div className="flex w-full space-x-20">
            <motion.div style={{scale}}>
              <ImageProfile src="mr-big-1999.jpg" cn="w-[400px] h-[400px]" />
            </motion.div>
            <div className="w-1/2">
              <div className="w-2/3">
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

'use client'

import {motion,useScroll, useTransform} from 'motion/react';
import { useRef } from 'react';

type props = {
  text:string,
  cn?:string,
}


export const Paragraph = ({text,cn}:props) => {
  return (
    <p className={`text-zinc-300 indent-20 text-xl font-intermedium text-justify ${cn}`}>{text}</p>
  )
}


export const TextTitle = ({text,cn}:props) => {
  const container = useRef<HTMLHeadingElement | null>(null)
  const {scrollYProgress} = useScroll({
    target:container,
    offset:['start end', 'start start'],
  })

  const y = useTransform(scrollYProgress,[0,1],[0,80])

  return (
    <motion.h1
      ref={container}
      style={{translateY:y}}
      className={`relative font-interextrabold font-extrabold text-center tracking-tighter leading-none text-softwhite ${cn}`}
      >
        {text}
    </motion.h1>
  )
}

export const TextRedSmall = ({text,cn}:props) => {
  return (
    <div>
      <p className={`font-qiaraTosfa w-full absolute left-1/2 bottom-0 -translate-x-1/2 text-center text-[3rem] md:text-[7rem] text-red-700 z-10 leading-none ${cn}`}>{text}</p>
    </div>
  )
}

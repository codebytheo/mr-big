'use client'

import Section from "@/components/section"
import {TextTitle, TextRedSmall} from "@/components/text"
import {animate,motion, useMotionValue} from 'motion/react'
import { useEffect, useState } from "react"
import CardAlbum from "./card-album"
import { albums } from "@/assets/assets"

const Album = () => {
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration,setDuration] = useState<number>(FAST_DURATION);
  const [mustFinish,setMustFinish] = useState<boolean>(false);
  const [rerender,setRerender] = useState<boolean>(false);
  const xTranslate = useMotionValue(0);


  useEffect(() => {
    let controls;

    let cardWidth = document.querySelector("#card-container");
    let cardWidthImage = -cardWidth?.clientWidth! / 2 - 8;


    if(mustFinish){
      controls = animate(xTranslate, [xTranslate.get(),cardWidthImage],{
        duration: duration * (1 - xTranslate.get() / cardWidthImage),
        ease:'linear',
        onComplete: () => {
          setMustFinish(false)
          setRerender(!rerender)
        }
      })
    } else {
      controls = animate(xTranslate, [0,cardWidthImage],{
        duration: duration,
        ease:'linear',
        repeat:Infinity,
        repeatType:'loop',
        repeatDelay:0,
      })
    }

    return controls?.stop;

  }, [xTranslate,duration,rerender])


  return (
    <Section>
      <div className="relative mb-10 md:mb-20">
        <TextTitle text="ALBUM" cn="text-[5rem] md:text-[12.5rem]" />
        <TextRedSmall text="studio" />
      </div>
      <div className="min-w-max">
        <motion.div
          id="card-container"
          className="flex space-x-4"
          style={{x:xTranslate}}
          onHoverStart={() => {
            setMustFinish(true)
            setDuration(SLOW_DURATION)
          }}
          onHoverEnd={() => {
            setMustFinish(true)
            setDuration(FAST_DURATION)
          }}
        >
          {[...albums,...albums].map((album,idx) => (
            <CardAlbum img={album?.img} title={album?.title} key={idx} />
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

export default Album

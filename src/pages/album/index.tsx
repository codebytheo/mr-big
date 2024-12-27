'use client'

import Section from "@/components/section"
import {TextTitle,TextRedBig} from "@/components/text"
import {animate,motion, useMotionValue} from 'framer-motion';
import { useEffect, useState } from "react"
import Card from "@/components/card"

const albums = [
  'mr-big-album.jpg',
  'lean-into-it.jpg',
  'bump-ahead.jpg',
  'hey-man.jpg',
  'get-over-it.jpg',
  'actual-size.jpg',
  'what-if.jpg',
  'the-stories-we-could-tell.jpg',
  'defying-gravity.jpg',
  'ten.webp',
]

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
      <div className="relative mb-20">
        <TextTitle text="ALBUM" cn="text-[200px]" />
        <TextRedBig text="studio" />
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
            <Card img={album} key={idx} />
          ))}
        </motion.div>
      </div>    
    </Section>
  )
}

export default Album

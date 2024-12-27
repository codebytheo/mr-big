'use client'

import ImageProfile from '@/components/image-profile';
import Section from '@/components/section';
import {TextTitle,TextRedBig} from "@/components/text";
import {motion,useScroll, useTransform} from 'framer-motion';
import Badge from './badge';
import Image from 'next/image';
import { useRef } from 'react';

const Members = () => {
  const stagger = {
    show:{
      transition:{
        staggerChildren:0.1,
      }
    }
  }
  const staggerChildren = {
    hidden:{
      y:"50%",
      opacity:0,
    },
    show:{
      y:0,
      opacity:1,
      transition:{
        type:'tween',
        ease:'easeInOut',
      }
    }
  }

  const container = useRef<HTMLDivElement | null>(null);

  const {scrollYProgress} = useScroll({
    target:container,
    offset:['start start','end end'],
  })

  const scale = useTransform(scrollYProgress,[0,1],[1,3])

  return (
    <Section>
      <div className="relative mb-20">
        <TextTitle text="MEMBERS" cn='text-[200px]' />
        <TextRedBig text="MR.BIG"/>
      </div>
      <motion.div 
        ref={container}
        className='relative left-0 h-[120dvh] w-full flex items-center overflow-hidden'
      >
        <motion.div className='absolute h-[100dvh] w-[100vw]'>
          <Image src="/img/mr-big6.jpg" alt="member" fill className='object-cover opacity-30 blur-[4px]' />
        </motion.div>
        <div className='w-full flex justify-between'>
          <motion.div
            className='w-[220px] z-20'
          >
            <ImageProfile src="eric-martin.jpg" cn='w-[220px] h-[300px]' />
            <div className='flex flex-col space-y-2'>
              <h1 className='font-intersemibold text-base font-bold text-red-700'>Eric Martin - October 10, 1960</h1>
              <Badge text="Vocal" />
              <p className="font-intermedium text-[0.9rem] text-justify text-zinc-300 leading-none">
                Eric Martin continues to perform as the lead vocalist for Mr. Big. He also released several solo albums and participated in various projects, including Eric Martin Band and Avantasia
              </p>
            </div>
          </motion.div>
          <motion.div
            className='w-[200px] z-20'
          >
            <ImageProfile src="paul-gilbert2.jpg" cn='w-[200px] h-[350px]' />
            <div className='flex flex-col space-y-2'>
              <h1 className='font-intersemibold text-base leading-tight font-bold text-red-700'>Paul Gilbert - November 6, 1966</h1>
              <Badge text='Guitar' />
              <p className="font-intermedium text-[0.9rem] text-justify text-zinc-300 leading-none">
                Paul Gilbert left Mr. Big in 1997 to pursue a solo career. He has since released numerous solo albums and also played with various bands and projects, such as Racer X and Yellow Matter Custard.
              </p>
            </div>
          </motion.div>
          <motion.div
            className='w-[250px] z-20'
          >
            <ImageProfile src="billy-sheehan.jpeg" cn='w-[250px] h-[280px]' />
            <div className='flex flex-col space-y-2'>
              <h1 className='font-intersemibold text-base font-bold text-red-700'>Billy Sheehan - March 19, 1953</h1>
              <Badge text='Bassist' />
              <p className="font-intermedium text-[0.9rem] text-zinc-300 leading-none text-justify">Billy Sheehan, known for his exceptional bass skills, left Mr. Big in 2002 due to internal conflicts. He formed a new band, Niacin, and later joined the Winery Dogs. He also collaborated with many artists, including Steve Vai and David Lee Roth</p>
            </div>
          </motion.div>
          <motion.div
            className='w-[240px] z-20'
          >
            <ImageProfile src="pat-torpey.jpg" cn='w-[240px] h-[290px]' />
            <div className='flex flex-col space-y-2'>
              <h1 className='font-intersemibold text-base leading-tight font-bold text-red-700'>Pat Torpey - December 13, 1953 – February 7, 2018</h1>
              <Badge text='Drummer' />
              <p className="font-intermedium text-[0.9rem] text-justify text-zinc-300 leading-none">Pat Torpey remained with Mr. Big until his death in 2018 from complications of Parkinson's disease. During his time with Mr. Big, he also worked with other artists and bands, including Robert Plant and the Winery Dogs</p>
            </div>
          </motion.div>
          <motion.div
            className='w-[200px] z-20'
          >
            <ImageProfile src="nick-d'virgilio.jpg" cn='w-[200px] h-[260px]' />
            <div className='flex flex-col space-y-2'>
              <h1 className='font-intersemibold text-base font-bold text-red-700'>Nick d' Virgilio - December 13, 1953 – February 7, 2018</h1>
              <Badge text='Drummer' />
              <p className="font-intermedium text-[0.9rem] text-justify text-zinc-300 leading-none">In March 2023, it was announced that Nick D'Virgilio would be joining Mr. Big as touring drummer for the 2023-2024 "The Big Finish Tour"</p>
            </div>
          </motion.div>
        </div>     
      </motion.div> 
      <div className='relative'>
          <h1 className='text-softwhite text-4xl font-interextrabold'>FORMER MEMBER</h1>
          <div className='flex space-x-4 mt-4'>
            <motion.div 
              className='w-[250px]'
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              viewport={{margin:'-100px',once:true}}
              transition={{type:'tween',ease:'easeInOut',duration:0.2}}
            >
              <ImageProfile src="richie-kotzen.jpg" cn='w-[250px] h-[300px]' />
              <div className='flex flex-col space-y-2'>
                <h1 className='font-intersemibold text-base leading-tight font-bold text-red-700'>Richie Kotzen - February 3, 1970</h1>
                <Badge text="Guitar" />
                <p className="font-intermedium text-[0.9rem] text-justify text-zinc-300 leading-none">Guitarist Paul Gilbert departed the band in 1999, and Richie Kotzen was brought on as a guitarist and vocalist. The band released two more albums with this line-up: Get Over It (1999) and Actual Size (2001). Mr. Big disbanded in 2002.</p>
              </div>
            </motion.div>
            <motion.div 
              className='w-[250px]'
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              viewport={{margin:'-100px',once:true}}
              transition={{type:'tween',ease:'easeInOut',duration:0.2}}
            >
              <ImageProfile src="matt-starr.jpg" cn='w-[250px] h-[300px]' />
              <div className='flex flex-col space-y-2'>
                <h1 className='font-intersemibold text-base leading-tight font-bold text-red-700'>Matt Starr - December 13, 1953 – February 7, 2018</h1>
                <Badge text="Drummer" />
                <p className="font-intermedium text-[0.9rem] text-justify text-zinc-300 leading-none">Matt Starr joined Mr. Big as a touring drummer in 2014, following Pat Torpey's diagnosis with Parkinson's disease. He has also worked with various artists, including Ace Frehley and Mr. Big's Eric Martin</p>
              </div>
            </motion.div>
          </div>
      </div>
    </Section>
  )
}

export default Members

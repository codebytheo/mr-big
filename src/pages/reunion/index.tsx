'use client'

import { reunion } from '@/assets/assets';
import ImageProfile from '@/components/image-profile';
import Section from '@/components/section';
import { Paragraph,TextRedSmall,TextTitle } from '@/components/text';
import useMobileSize from '@/hooks/useMobileSize';
import {motion,useScroll,useTransform} from 'motion/react';
import { useRef } from 'react';

const Reunion = () => {
  const container = useRef<HTMLDivElement | null>(null)

  const {scrollYProgress} = useScroll({
    target:container,
    offset:['start end', 'end start'],
  })

  const yImg = useTransform(scrollYProgress,[0,1],[0,-400])

  const isMobile = useMobileSize()

  return (
    <Section>
      <div className="relative mb-10 md:mb-20">
        <TextTitle text="REUNION" cn='text-[5rem] md:text-[12.5rem]' />
        <TextRedSmall text="& new album" />
      </div>
      <div className='w-full relative flex flex-col md:flex-row justify-between' ref={container}>
        <motion.div
          style={{translateY: isMobile ? 0 : yImg}}
          className='relative md:top-60 z-0 flex flex-1 flex-col space-y-4'>
          <div className="flex flex-row gap-2">
            <ImageProfile src="mr-big7.jpg" cn='w-[200px] md:w-[250px] h-[300px] md:h-[350px]' />
            <ImageProfile src="mr-big8.jpg" cn='w-[200px] md:w-[250px] h-[200px] md:h-[250px]' />
          </div>
          <ImageProfile src="mr-big-wallpapers.jpg" cn='w-[300px] md:w-[500px] h-[250px] md:h-[350px]' />
        </motion.div>

        <div className='flex-1 w-full [&>:nth-child(2)]:w-3/4 [&>:nth-child(5)]:w-3/4 md:[&>:nth-child(2)]:mt-2 md:[&>:nth-child(3)]:mt-2 md:[&>:nth-child(4)]:mt-2'>
          {
            reunion.map((text,idx) => (
              <Paragraph key={idx} text={text.p} />
            ))
          }
        </div>
      </div>
    </Section>
  )
}

export default Reunion

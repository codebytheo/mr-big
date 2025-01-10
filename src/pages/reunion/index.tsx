'use client'

import { reunion } from '@/assets/assets';
import ImageProfile from '@/components/image-profile';
import Section from '@/components/section';
import { Paragraph,TextRedSmall,TextTitle } from '@/components/text';
import {motion,useScroll,useTransform} from 'framer-motion';
import { useRef } from 'react';

const Reunion = () => {
  const container = useRef<HTMLDivElement | null>(null)

  const {scrollYProgress} = useScroll({
    target:container,
    offset:['start end', 'end start'],
  })

  const yImg = useTransform(scrollYProgress,[0,1],[0,-400])

  return (
    <Section>
      <div className="relative mb-20">
        <TextTitle text="REUNION" cn='text-[200px]' />
        <TextRedSmall text="& new album" />
      </div>
      <div className='relative' ref={container}>
        <motion.div style={{translateY:yImg}} className='absolute top-60 right-0 flex flex-col items-end space-y-4'>
          <ImageProfile src="mr-big8.jpg" cn='w-[300px] h-[300px]' />
          <ImageProfile src="mr-big-wallpapers.jpg" cn='w-[500px] h-[350px]' />
        </motion.div>
        <motion.div style={{translateY:yImg}} className='absolute bottom-0 right-0'>
          <ImageProfile src="mr-big7.jpg" cn='w-[300px] h-[400px]' />
        </motion.div>

        <div className='[&>:nth-child(2)]:w-1/3 [&>:nth-child(2)]:mt-2 [&>:nth-child(3)]:mt-2 [&>:nth-child(4)]:mt-2 [&>:nth-child(4)]:w-1/3'>
          {
            reunion.map((text,idx) => (
              <Paragraph key={idx} text={text.p} cn='w-1/2' />
            ))
          }
        </div>
      </div>
    </Section>
  )
}

export default Reunion

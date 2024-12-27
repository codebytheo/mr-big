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
        <motion.div style={{translateY:yImg}} className='absolute top-60 right-0'>
          <ImageProfile src="mr-big5.jpg" cn='w-[400px] h-[220px]' />
        </motion.div>
        <motion.div style={{translateY:yImg}} className='absolute bottom-0 right-0'>
          <ImageProfile src="mr-big7.jpg" cn='w-[300px] h-[400px]' />
        </motion.div>
        <h1 className='text-[120px] font-dancingScript text-red-700 absolute right-0 top-1/3 -translate-y-1/2'>2009-2017</h1>

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

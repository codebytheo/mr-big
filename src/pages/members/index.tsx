'use client'

import ImageProfile from '@/components/image-profile';
import Section from '@/components/section';
import {TextTitle, TextRedSmall} from "@/components/text";
import { formerMembers, members } from '@/assets/assets';
import CardMember from './card-member';

const Members = () => {
  return (
    <Section>
      <div className="relative mb-20">
        <TextTitle text="MEMBERS" cn='text-[5rem] md:text-[12.5rem]' />
        <TextRedSmall text="MR.BIG"/>
      </div>
      <div className='relative min-h-screen md:h-[120vh] w-full flex items-center overflow-hidden'
      >
        <div className='absolute inset-0 hidden md:block'>
          <ImageProfile src="mr-big6.jpg" cn='w-full h-full opacity-20 blur-[4px]' />
        </div>
        <div className='w-full flex flex-col md:flex-row space-x-0 md:space-x-2 space-y-4 md:space-y-0 md:justify-between'>
        {
          members.map((item,idx) => (
            <CardMember key={idx} {...item} />
          ))
        }
      </div>
      </div>
      <div className='relative mt-10 md:mt-0'>
        <h1 className='text-softwhite text-4xl font-interextrabold'>FORMER MEMBER</h1>
        <div className='w-full md:w-1/2 flex flex-col md:flex-row md:space-x-2 mt-4 space-y-4 md:space-y-0'>
          {
            formerMembers.map((item,idx) => (
              <CardMember key={idx} {...item} />
            ))
          }
        </div>
      </div>
    </Section>
  )
}

export default Members

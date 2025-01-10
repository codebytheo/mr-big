'use client'

import ImageProfile from '@/components/image-profile';
import Section from '@/components/section';
import {TextTitle,TextRedBig} from "@/components/text";
import { formerMembers, members } from '@/assets/assets';
import CardMember from './card-member';

const Members = () => {
  return (
    <Section>
      <div className="relative mb-20">
        <TextTitle text="MEMBERS" cn='text-[200px]' />
        <TextRedBig text="MR.BIG"/>
      </div>
      <div className='relative h-[120vh] w-full flex items-center overflow-hidden'
      >
        <div className='absolute inset-0'>
          <ImageProfile src="mr-big6.jpg" cn='w-full h-full opacity-20 blur-[4px]' />
        </div>
        <div className='w-full flex justify-between'>
        {
          members.map((item,idx) => (
            <CardMember key={idx} {...item} />
          ))
        }
      </div>
      </div>
      <div className='relative'>
          <h1 className='text-softwhite text-4xl font-interextrabold'>FORMER MEMBER</h1>
          <div className='flex space-x-4 mt-4'>
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

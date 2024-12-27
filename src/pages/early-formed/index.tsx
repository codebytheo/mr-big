import { earlyFormed } from "@/assets/assets"
import Section from "@/components/section"
import {TextTitle,TextRedSmall, Paragraph} from "@/components/text"
import Image from "next/image"

const EarlyFormed = () => {
  return (
    <Section>
      <div className="relative mb-20">
        <TextTitle text="EARLY FORMED" cn="text-[150px]" />
        <TextRedSmall text="start of the journey" />
      </div>
      <div className="w-11/12 m-auto flex justify-between">
        <div className="relative w-[300px] h-[450px] after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-[#111] after:from-4%">
          <Image src="/img/mr-big4.jpg" alt="mr big" fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 33vw" className="object-cover grayscale" />
        </div>
        <div className="w-1/2 [&>:nth-child(2)]:w-3/4 [&>:nth-child(2)]:ml-auto">
          { 
            earlyFormed.map((text,idx) => (
              <Paragraph key={idx} text={text.p} />
            ))
          }
        </div>
      </div>
    </Section>
  )
}

export default EarlyFormed
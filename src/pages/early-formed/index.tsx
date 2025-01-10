import { earlyFormed } from "@/assets/assets"
import ImageProfile from "@/components/image-profile"
import Section from "@/components/section"
import {TextTitle,TextRedSmall, Paragraph} from "@/components/text"

const EarlyFormed = () => {
  return (
    <Section>
      <div className="relative mb-20">
        <TextTitle text="EARLY FORMED" cn="text-[150px]" />
        <TextRedSmall text="start of the journey" />
      </div>
      <div className="w-11/12 m-auto flex justify-between">
        <div className="relative w-[350px] h-[500px] after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-[#111] after:from-4%">
          <ImageProfile src="mr-big4.jpg" cn="w-full h-full grayscale" />
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

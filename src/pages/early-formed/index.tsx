import { earlyFormed } from "@/assets/assets"
import ImageProfile from "@/components/image-profile"
import Section from "@/components/section"
import {TextTitle,TextRedSmall, Paragraph} from "@/components/text"

const EarlyFormed = () => {
  return (
    <Section>
      <div className="relative mb-20">
        <TextTitle text="EARLY FORMED" cn="text-[3.4rem] md:text-[9.3rem]" />
        <TextRedSmall text="start of the journey" />
      </div>
      <div className="w-11/12 m-auto flex flex-col md:flex-row justify-between">
        <div className="relative w-[350px] h-[500px] after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-[#111] after:from-4% m-auto md:m-0">
          <ImageProfile src="mr-big4.jpg" cn="w-full h-full grayscale" />
        </div>
        <div className="w-full md:w-1/2 md:[&>:nth-child(2)]:w-3/4 md:[&>:nth-child(2)]:ml-auto">
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

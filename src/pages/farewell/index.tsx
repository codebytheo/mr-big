import { farewell } from "@/assets/assets"
import ImageProfile from "@/components/image-profile"
import Section from "@/components/section"
import { Paragraph, TextRedSmall, TextTitle } from "@/components/text"

const Farewell = () => {
  return (
    <Section>
      <div className="relative mb-20">
        <TextTitle text="FAREWELL TOUR" cn='text-[150px]' />
        <TextRedSmall text="The BIG Finish" />
      </div>
      <div className="relative flex gap-8">
        <div className="flex flex-col">
          <Paragraph text={farewell[0]?.p} cn='w-full' />
          <Paragraph text={farewell[1]?.p} cn='w-full' />
        </div>
        <div>
          <ImageProfile src="mr-big-big-finish.jpg" cn="w-[600px] h-[300px]" />
        </div>
      </div>
      <div className="py-20 relative flex gap-8">
        <div>
          <ImageProfile src="new-mr-big.jpg" cn="w-[500px] h-[300px]" />
        </div>
        <div className="flex flex-col">
          <Paragraph text={farewell[2]?.p} cn='w-full' />
          <Paragraph text={farewell[3]?.p} cn='w-full' />
        </div>
      </div>
    </Section>
  )
}

export default Farewell

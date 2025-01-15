import { farewell } from "@/assets/assets"
import ImageProfile from "@/components/image-profile"
import Section from "@/components/section"
import { Paragraph, TextRedSmall, TextTitle } from "@/components/text"
import { IoMdQuote } from "react-icons/io";
import Note from "./note";

const Farewell = () => {
  return (
    <Section>
      <div className="relative mb-20">
        <TextTitle text="FAREWELL TOUR" cn='text-6xl md:text-[150px]' />
        <TextRedSmall text="The BIG Finish" />
      </div>
      <div className="relative flex flex-col md:flex-row gap-8">
        <div className="flex flex-col">
          <Paragraph text={farewell[0]?.p} cn='w-full' />
          <Paragraph text={farewell[1]?.p} cn='w-full' />
        </div>
        <div>
          <ImageProfile src="new-mr-big.jpg" cn="w-full md:w-[600px] h-[200px] md:h-[300px]" />
        </div>
      </div>
      <div className="py-4 md:py-20 relative flex flex-col gap-8">
        <div>
          <ImageProfile src="mr-big-big-finish.jpg" cn="w-full h-[200px] md:h-[500px]" />
        </div>
        <div className="flex flex-col">
          <Note note={farewell[2].p} member="Billy Sheehan" />
          <Note note={farewell[3].p} member="Paul Gilbert" />
          <Note note={farewell[4].p} member="Submit Eric Martin" />
        </div>
          <Paragraph text={farewell[5].p} cn="w-3/4 md:w-1/3" />
          <Note note={farewell[6].p} member="confirms Sheehan" />
      </div>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-0">
          <div className="flex gap-2">
            <ImageProfile src="concert-1.jpg" cn="w-[180px] h-[100px] md:w-[500px] md:h-[300px]" />
            <ImageProfile src="concert-2.jpg" cn="w-[150px] h-[100px] md:w-[400px] md:h-[300px]" />
          </div>
          <ImageProfile src="concert-3.jpg" cn="w-[300px] h-[200px]" />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-0">
          <div className="flex gap-2">
            <ImageProfile src="concert-4.jpg" cn="w-[180px] h-[100px] md:w-[500px] md:h-[300px]" />
            <ImageProfile src="concert-6.jpg" cn="w-[200px] h-[120px] md:w-[300px] md:h-[200px]" />
          </div>
          <ImageProfile src="concert-5.jpg" cn="w-[350px] h-[180px] md:w-[400px] md:h-[300px]" />
        </div>
        <div className="flex justify-between gap-2">
          <ImageProfile src="concert-7.jpg" cn="w-[250px] h-[300px] md:w-[450px] md:h-[600px]" />
          <ImageProfile src="concert-8.jpg" cn="w-[150px] h-[100px] md:w-[400px] md:h-[300px]" />
        </div>
      </div>
    </Section>
  )
}

export default Farewell

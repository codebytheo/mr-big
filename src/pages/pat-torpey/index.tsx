import ImageProfile from "@/components/image-profile"
import Section from "@/components/section"
import {Paragraph, TextTitle,TextRedSmall} from "@/components/text"

const PatTorpey = () => {
  return (
    <Section>
      <div className="relative mb-20">
        <TextTitle text="DEATH OF PAT TORPEY" cn="text-6xl md:text-[7.5rem]" />
        <TextRedSmall text="& new drummer" />
      </div>
      <div>
        <Paragraph text="On February 7, 2018, drummer Pat Torpey died from complications of Parkinson's disease at the age of 64. His last show took place at the Wulfrun Hall in Wolverhampton on November 23, 2017. A memorial show took place on May 23, 2018, at The Canyon in Agoura Hills, California, with former member Richie Kotzen as a special guest. The all-star finale of 'To Be With You' included, among others, Matt Sorum, Dave Amato, Ricky Phillips, Keith St John, Prescott Niles, Kelly Keagy, Jeff Scott Soto, Ace Von Johnson and Gregg Bissonette" />
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 mt-10 saturate-0">
        <ImageProfile src="pat-torpey.webp" cn='w-[400px] md:w-[500px] h-[300px] md:h-[400px]' />
        <div className="flex md:gap-4">
          <ImageProfile src="pat-torpey2.jpg" cn='w-[200px] md:w-[300px] h-[120px] md:h-[300px]' />
          <ImageProfile src="mr-big5.jpg" cn='w-[200px] md:w-[300px] h-[120px] md:h-[200px]' />
        </div>
      </div>
    </Section>
  )
}

export default PatTorpey

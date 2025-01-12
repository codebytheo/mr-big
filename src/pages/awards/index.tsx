import { awards } from "@/assets/assets"
import Section from "@/components/section"
import {TextTitle,TextRedBig} from "@/components/text"
import List from "./List"

const Awards = () => {
  return (
    <Section>
      <div className="relative mb-20">
        <TextTitle text="AWARDS" cn="text-6xl md:text-[200px]" />
        <TextRedBig text="achievment" />
      </div>
      <ul>
        {
          awards.map((text,idx) => (
            <List key={idx} year={text?.year as string} text={text?.p} />
          ))
        }
      </ul>
    </Section>
  )
}

export default Awards

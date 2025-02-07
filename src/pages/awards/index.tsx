import { awards } from "@/assets/assets"
import Section from "@/components/section"
import {TextTitle, TextRedSmall} from "@/components/text"
import List from "./List"

const Awards = () => {
  return (
    <Section>
      <div className="relative mb-20">
        <TextTitle text="AWARDS" cn="text-[5rem] md:text-[12.5rem]" />
        <TextRedSmall text="achievment" />
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

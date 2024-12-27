import { awards } from "@/assets/assets"
import Section from "@/components/section"
import {TextTitle,TextRedBig} from "@/components/text"

const Awards = () => {
  return (
    <Section>
      <div className="relative mb-20">
        <TextTitle text="AWARDS" cn="text-[200px]" />
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

const List = ({year,text}:{year:string,text:string}) => {
  return (
    <>
      <li className="flex items-center">
        <span className="text-4xl font-intersemibold text-red-700 underline mr-8">{year}:</span> <p className="text-4xl text-zinc-300">{text}</p>
      </li>
      <hr className="my-4" />
    </>
  )
}
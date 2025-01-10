import ImageProfile from "@/components/image-profile"
import Badge from "./badge"
import { membersType } from "@/assets/assets"

const CardMember = ({image,born,pos,p}:membersType) => {
  return (
    <div className={`w-[${image?.width}px] z-20`}>
      <ImageProfile src={image?.url} cn={`w-[${image.width}px] h-[${image.height}px]`} />
      <div className='flex flex-col space-y-2'>
        <h1 className='font-intermedium text-base font-bold text-red-700'>{born}</h1>
        <Badge text={pos} />
        <p className="font-intermedium text-[0.9rem] text-justify text-zinc-300 leading-none">{p}</p>
      </div>
    </div>
  )
}

export default CardMember

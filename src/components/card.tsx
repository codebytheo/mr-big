import Image from "next/image";

const Card = ({img}:{img:string}) => {
  return (
    <div className="relative w-[200px] h-[200px]">
      <Image src={`/img/album/${img}`} alt={img} fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 33vw" className="object-cover rounded-md" />
    </div>
  )
}

export default Card;
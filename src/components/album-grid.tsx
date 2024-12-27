import Image from "next/image"

type AlbumType = {
  name:string,
  description:string,
  img:string,
  cn?:string,
}

const AlbumGrid = ({name,description,img,cn}:AlbumType) => {
  return (
    <div className={`w-[300px] ${cn}`}>
      <Image src={`/img/${img}`} alt={name} width={400} height={400} sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 33vw" />
      <h1 className="text-red-700 font-interextrabold text-2xl text-center">{name}</h1>
      <p className="text-zinc-300 text-justify font-intermedium">{description}</p>
    </div>
  )
}

export default AlbumGrid
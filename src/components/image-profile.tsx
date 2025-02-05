import Image from "next/image"

const ImageProfile = ({src,cn,pos}:{src:string,cn:string,pos?:string}) => {

  return (
    <div className={`relative ${cn}`}>
      <Image src={`/img/${src}`} alt="members" fill sizes="(max-width: 1200px) 80vw, 100vw" priority={true} className={`object-cover ${pos === "top" ? 'object-top' : 'object-center'}`} />
    </div>
  )
}

export default ImageProfile

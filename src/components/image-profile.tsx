
import Image from "next/image"

const ImageProfile = ({src,cn}:{src:string,cn:string}) => {

  return (
    <div className={`relative ${cn}`}>
      <Image src={`/img/${src}`} alt="members" fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 33vw" className="object-cover" />
    </div>
  )
}

export default ImageProfile

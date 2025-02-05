import ImageProfile from "@/components/image-profile";

const CardAlbum = ({img,title}:{img:string,title:string}) => {
  return (
    <div className="flex flex-col items-center">
      <ImageProfile src={`album/${img}`} cn="w-[200px] h-[200px]" />
      <p className="text-base font-clashGrotesk text-softwhite">{title}</p>
    </div>
  )
}

export default CardAlbum;

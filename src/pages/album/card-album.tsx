import ImageProfile from "@/components/image-profile";

const CardAlbum = ({img}:{img:string}) => {
  return (
    <>
      <ImageProfile src={`album/${img}`} cn="w-[200px] h-[200px]" />
    </>
  )
}

export default CardAlbum;

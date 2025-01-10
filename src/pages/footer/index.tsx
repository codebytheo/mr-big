import ImageProfile from "@/components/image-profile"
import Image from "next/image"

const Footer = () => {
  return (
    <div className="min-h-screen w-full m-auto">
      <div className="relative w-full h-[600px] after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-[#111] after:from-4%">
        <ImageProfile src="mr-big-bg.jpg" cn="w-full h-full" />
      </div>
      <section className="relative h-[500px]">
        <ImageProfile src="mr-big6.jpg" cn="w-full h-full brightness-40 opacity-40" />
        <div className="absolute top-0 left-0 z-20 h-full w-full flex flex-col justify-center items-center text-softwhite">
          <h1 className="text-[6rem] w-3/4 text-center leading-none font-interextrabold">Made with passion</h1>
          <p className="text-center font-dancingScript text-4xl font-bold text-red-600">by Theo</p>
        </div>
        <div className="absolute bottom-8 z-50 flex space-x-8 justify-center w-full">
          <a href="https://theoyoth.vercel.app" className="text-softwhite text-2xl font-clashGrotesk hover:text-red-600" target="_blank">theoyoth.vercel.app</a>
          <a href="#" className="text-softwhite text-2xl font-clashGrotesk hover:text-red-500" target="_blank">Instagram</a>
          <a href="#" className="text-softwhite text-2xl font-clashGrotesk hover:text-red-500" target="_blank">Dribble</a>
        </div>
      </section>
    </div>
  )
}

export default Footer

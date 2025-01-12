import ImageProfile from "@/components/image-profile"
import MarqueText from "@/components/marque-text"
import Image from "next/image"

const Intro = () => {
  return (
    <section className="w-11/12 min-h-screen m-auto">
      <div className="flex flex-col items-center leading-none">
        <div className="text-4xl md:text-[150px] font-interextrabold text-center md:tracking-[-8px] leading-none text-softwhite flex space-x-4 items-center">
          <span>HISTORY OF</span>
          <ImageProfile src="mr-big-logo.png" cn="w-[50px] h-[50px] md:w-[170px] md:h-[120px]" />
        </div>
        <div className="relative w-full h-[200px] md:h-[400px] after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-[#111] after:from-4%">
          <ImageProfile src="mr-big-bg2.jpg" cn="w-full h-full" pos="top" />
        </div>

        <MarqueText text="MR.BIG" />

        <div className="w-11/12 font-clashGrotesk text-zinc-300 leading-tight text-2xl md:text-[2.5rem] text-justify mt-10">
            Mr. Big is an American rock band 🤘 that was formed in 1988. The original members were Eric Martin (lead vocals), Paul Gilbert (guitar), Billy Sheehan (bass), and Pat Torpey (drums). The band gained popularity in the early 1990s with their hit singles "To Be With You" 🎸 and "Green-Tinted Sixties Mind" 🎸 both of which were included in their second studio album, "Lean Into It" (1991). "To Be With You" topped the Billboard Hot 100 chart for three weeks, making Mr. Big a household name.
        </div>
      </div>
    </section>
  )
}

export default Intro

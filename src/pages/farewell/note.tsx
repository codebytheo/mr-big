import { IoMdQuote } from "react-icons/io"

const Note = ({note,member}:{note:string,member:string}) => {
  return (
    <div className="text-zinc-300 text-6xl">
      <IoMdQuote size={50} />
      <p className="text-2xl md:text-4xl text-zinc-300 font-clashGrotesk text-justify">{note}</p>
      <div className="flex items-baseline space-x-2">
        <IoMdQuote size={50} />
        <p className="text-red-700 text-2xl font-clashGrotesk">{member}</p>
      </div>
    </div>
  )
}

export default Note

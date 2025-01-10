const List = ({year,text}:{year:string,text:string}) => {
  return (
    <>
      <li className="flex items-center font-clashGrotesk">
        <span className="text-4xl text-red-700 underline mr-8">{year}:</span>
        <p className="text-4xl text-zinc-300">{text}</p>
      </li>
      <hr className="my-4" />
    </>
  )
}

export default List;

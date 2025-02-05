
const MarqueText = ({text}:{text:string}) => {
  return (
    <div className="w-max md:py-4 flex bg-amber-500">
      {
        Array.from({length:10}, (_,i) => i).map((_,idx) => (
          <h1 key={idx} className="px-2 text-2xl md:text-[4rem] text-red-700 font-clashGrotesk marque-text">{text}</h1>
        ))
      }
    </div>
  )
}

export default MarqueText;

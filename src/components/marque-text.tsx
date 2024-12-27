
const MarqueText = ({text}:{text:string}) => {
  return (
    <div className="w-max flex">
      {
        [0,1,2,3,4,5,6,7,8,9,10].map((item,idx) => (
          <h1 key={idx} className="px-2 text-[4rem] text-red-700 font-interextrabold marque-text">{text}</h1>
        ))
      }
    </div>
  )
}

export default MarqueText;

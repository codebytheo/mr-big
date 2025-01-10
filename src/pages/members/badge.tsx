
const Badge = ({text}:{text:string}) => {
  return (
    <div className='w-[70px] py-1 rounded-md bg-red-700'>
      <p className='text-center text-zinc-300 text-xs font-bold uppercase font-intermedium'>{text}</p>
    </div>
  )
}

export default Badge

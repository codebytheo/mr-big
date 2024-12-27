
const Badge = ({text}:{text:string}) => {
  return (
    <div className='w-[70px] py-1 rounded-md bg-red-700'>
      <p className='text-center text-zinc-300 text-xs'>{text}</p>
    </div>
  )
}

export default Badge

const Tag = ({text,color}:{text:string,color?:string}) => {
  return (
    <div className={`${color === 'cyan' ? 'bg-cyan-600' : color === 'amber' ? 'bg-amber-500' :
    'bg-red-700'} p-2`}>
      <h1 className="text-4xl text-softwhite font-clashGrotesk font-extrabold">{text}</h1>
    </div>
  )
}

export default Tag

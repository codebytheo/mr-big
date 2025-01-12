
const Section = ({children}:{children:React.ReactNode}) => {
  return (
    <section className="w-11/12 md:min-h-screen m-auto py-20 relative overflow-hidden">
      {children}
    </section>
  )
}

export default Section

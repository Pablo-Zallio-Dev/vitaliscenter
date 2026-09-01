
export type SubHeadingProps = {
      number?: string,
      text: string,
      dark?: boolean
}

const SubHeading = ( {number, text, dark}:SubHeadingProps ) => {
  return (
    <div className={`  flex items-center gap-3 ${ dark ?'text-cream' :'text-text/70'}  `}>
      <p className=" font-crimsonText text-sm ">{number}</p>
      <div className={` w-8 border-t ${ dark ? ' border-cream/70 ' : ' border-border-25 ' } `}></div>
      <h4 className=" font-catamaran text-xs uppercase tracking-widest ">{text}</h4>
    </div>
  )
}

export default SubHeading
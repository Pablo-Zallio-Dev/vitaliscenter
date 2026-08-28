import Link from "next/link"

export type ButtonPrimaryProps = {
      text: string,
      href: string,
      full?: boolean
}

const ButtonPrimary = ({text, href, full}:ButtonPrimaryProps) => {
  return (
    <Link href={href} className={` ${full ?'w-full justify-start' : ' justify-center ' } inline-flex py-4 px-8 bg-accent font-catamaran font-medium text-sm tracking-widest text-text-secondary uppercase lg:hover:brightness-105 transition-all duration-200  `} >
      {text}
    </Link>
  )
}

export default ButtonPrimary

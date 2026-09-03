import Link from 'next/link'
import React from 'react'

const Logo = ( {dark = false}: {dark?: boolean} ) => {
  return (
    <Link href={'/'} className={` font-crimsonText text-xl font-bold tracking-tighter bg-transparent ${ dark ?' text-cream ' :' text-text' } `}>Vitalis<span className=" text-accent ">Center</span> </Link>
  )
}

export default Logo
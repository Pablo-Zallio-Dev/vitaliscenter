import React from 'react'

const Logo = ( {dark = false}: {dark?: boolean} ) => {
  return (
    <p className={` font-crimsonText text-xl font-bold tracking-tighter bg-transparent ${ dark ?' text-cream ' :' text-text' } `}>Som <span className=" text-accent ">Genial</span> </p>
  )
}

export default Logo
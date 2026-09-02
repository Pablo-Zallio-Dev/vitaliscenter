import React from 'react'

interface ServiceProps {
      id: string,
      name: string,
      line?: boolean,
      
}

const ServiceButtonNav = ({id, name, line}: ServiceProps) => {
  return (
    <div className=" flex items-center gap-2 text-xs lg:justify-self-center tracking-wide ">
      <p className=" font-crimsonText text-accent  "> {id} </p>
      {
            line &&  <hr className=" w-6 border-b border-border-25 " />
      }
      <p className=" font-catamaran text-text uppercase ">{name}</p>
    </div>
  )
}

export default ServiceButtonNav
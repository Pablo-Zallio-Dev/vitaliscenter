import React from 'react'

interface ServiceProps {
      id: string,
      name: string,
      line?: boolean,
      
}

const ServiceButtonNav = ({id, name, line}: ServiceProps) => {
  return (
    <div className=" flex items-center gap-2 text-xs lg:justify-self-center tracking-wide ">
      <h4 className=" font-crimsonText text-accent  "> {id} </h4>
      {
            line &&  <hr className=" w-6 border-b border-border-25 " />
      }
      <h4 className=" font-catamaran text-text uppercase ">{name}</h4>
    </div>
  )
}

export default ServiceButtonNav
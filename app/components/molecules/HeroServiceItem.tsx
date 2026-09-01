import Link from 'next/link';
import React from 'react'

const HeroServiceItem = () => {

      
 const HERO_SERVICES = [
  {
    id: "01",
    title: "FISIOTERAPIA Y TERAPIA MANUAL",
  },
  {
    id: "02",
    title: "ENTRENAMIENTO PERSONAL",
  },
  {
    id: "03",
    title: "RECUPERACIÓN Y MÉTODOS COMPLEMENTARIOS",
  },
  {
    id: "04",
    title: "TRATAMIENTO DEL DOLOR Y MOVILIDAD",
  },
];


  return (
    <div className='flex flex-col lg:flex-row 2xl:w-3/4 justify-between px-5  '>
            {
                  HERO_SERVICES.map((service) => (
                        <Link  key={service.id} className="  flex items-center gap-3 py-2 my-3  lg:px-4 lg:border-x lg:border-border-cream-35 text-cream font-catamaran text-sm hover:text-accent transition-colors duration-200 " href={'/servicios'}>{service.id} {service.title}</Link>
                  ))
            }
    </div>
  )
}

export default HeroServiceItem
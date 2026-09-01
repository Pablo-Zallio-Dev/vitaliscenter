import SubHeading from '@/app/components/atoms/SubHeading'
import TextElement from '@/app/components/atoms/TextElement'
import React from 'react'
import ServiceButtonNav from '../atoms/ServiceButtonNav'
import Link from 'next/link'

const ServicesHeader = () => {

      const SERVICES = [
            {
                  id: "01",
                  name: "Fisioterapia y terapia manual",
                  href: ""
            },
            {
                  id: "02",
                  name: "Entrenamiento personal",
                  href: ""
            },
            {
                  id: "03",
                  name: "Recuperación y métodos complementarios",
                  href: ""
            },
            {
                  id: "04",
                  name: "Tratamiento del dolor y movilidad",
                  href: ""
            }
      ]
            ;


      return (
            <section className=" flex justify-center pt-34 md:pt-20 px-5 sm:px-10 md:px-20 pb-10 md:pb-15  bg-background ">
                  <div className=" w-full max-w-336 ">
                        <SubHeading number={'01'} text={'servicios'} />
                        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 pb-12 w-full ">
                              <div className=" col-span-2 flex flex-col gap-7 ">
                                    <TextElement variant={'heading-xl'} as={'h1'} className=' max-w-3xl '>
                                          Tratamientos para tu momento
                                    </TextElement>
                              </div>
                              <div className=" flex flex-col xl:justify-self-end ">
                                    <TextElement variant={'text'} as={'p'} className=' max-w-2xs ' >
                                          Todo empieza con una valoración. A partir de ahí decidimos juntos qué combinación de terapia manual, ejercicio y recuperación tiene sentido para ti.
                                    </TextElement>
                              </div>
                        </div>
                        <nav className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:justify-items-center xl:justify-items-start gap-8 md:pt-10 xl:pt-20 pb-10 border-b border-border-25 ">
                              {
                                    SERVICES.map((service) => (

                                          <Link key={service.id} href={service.href}>
                                          <ServiceButtonNav  id={service.id} name={service.name}/>
                                          </Link>

                                    ))
                              }
                        </nav>

                  </div>
            </section>
      )
}

export default ServicesHeader


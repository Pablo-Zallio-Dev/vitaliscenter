'use client'
import SubHeading from '@/app/components/atoms/SubHeading'
import TextElement from '@/app/components/atoms/TextElement'
import ServiceButtonNav from '../atoms/ServiceButtonNav'
import Link from 'next/link'
import Container from '@/app/components/atoms/Container'
import FadeIn from '@/app/components/atoms/FadeIn'

const ServicesHeader = () => {

      const SERVICES = [
            {
                  id: "01",
                  name: "Fisioterapia y terapia manual",
                  href: '/servicios#fisioterapia'
            },
            {
                  id: "02",
                  name: "Entrenamiento personal",
                  href: '/servicios#entrenamiento'
            },
            {
                  id: "03",
                  name: "Recuperación y métodos complementarios",
                  href: '/servicios#recuperacion'
            },
            {
                  id: "04",
                  name: "Tratamiento del dolor y movilidad",
                  href: '/servicios#tratamiento'
            }
      ]
            ;


      return (
            <Container className=' pt-34 md:pt-20 bg-background ' >
                  <div className=" w-full max-w-336 ">
                        <FadeIn>
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
                        </FadeIn>
                        <nav className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center md:justify-items-center xl:justify-items-start gap-8 md:pt-10 xl:pt-20 pb-10 border-b border-border-25 ">
                              {
                                    SERVICES.map((service) => (

                                          <Link key={service.id} href={service.href} className=' py-0.5 px-2 rounded-full lg:hover:-translate-y-1 lg:hover:shadow-lg/10 transition-all duration-300 '>
                                                <ServiceButtonNav id={service.id} name={service.name} />
                                          </Link>

                                    ))
                              }
                        </nav>

                  </div>
            </Container>
      )
}

export default ServicesHeader


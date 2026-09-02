import Container from '@/app/components/atoms/Container'
import SubHeading from '@/app/components/atoms/SubHeading'
import TextElement from '@/app/components/atoms/TextElement'
import Image from 'next/image'
import React from 'react'

const AboutHistory = () => {
      return (
            <Container className=' bg-background'>
                  <div className=" grid grid-cols-1 md:grid-cols-2 gap-14 pb-18">
                        <div className=" flex flex-col gap-6 ">
                              <SubHeading text={'la historia'} number='02' />
                              <TextElement variant={'heading-lg'} as={'h2'}>
                                    Cómo nace Stick Fenomenal
                              </TextElement>
                              <TextElement variant={'text'} as={'p'} >
                                    Empezamos con una camilla, muchas ganas y la convicción de que el tratamiento manual funciona mejor cuando va acompañado de movimiento. Con los años el centro creció, se sumó el entrenamiento personal y el equipo aumentó, pero la forma de trabajar sigue siendo la misma.
                              </TextElement>
                              <TextElement variant='text' as={'p'}>
                                    Hoy atendemos a personas que vienen por dolor, por una lesión o simplemente porque quieren moverse mejor. Todas reciben el mismo trato: tiempo, escucha y un plan claro.
                              </TextElement>
                        </div>
                        <div className=" flex flex-col gap-12 ">
                              <Image src={'/images/image_centre_01.webp'} alt={''} width={400} height={600} className=' w-full max-w-[652px] ' />
                              <div className="">
                                    <div className=" flex gap-16 items-center py-4 border-t border-border-25 ">
                                          <p className=" text-accent font-crimsonText font-semibold text-xs ">01</p>
                                          <div className=" font-catamaran text-base ">Una valoración honesta antes de empezar cualquier tratamiento.</div>
                                    </div>
                                    <div className=" flex gap-16 items-center py-4 border-t border-border-25 ">
                                          <p className=" text-accent font-crimsonText font-semibold text-xs ">02</p>
                                          <div className=" font-catamaran text-base ">Sesiones individuales, sin solapar pacientes ni ir con prisa.</div>
                                    </div>
                                    <div className=" flex gap-16 items-center py-4 border-t border-border-25 ">
                                          <p className=" text-accent font-crimsonText font-semibold text-xs ">03</p>
                                          <div className=" font-catamaran text-base ">Explicarte qué te pasa con palabras que se entiendan.</div>
                                    </div>
                                    <div className=" flex gap-16 items-center py-4 border-t border-border-25 ">
                                          <p className=" text-accent font-crimsonText font-semibold text-xs ">04</p>
                                          <div className=" font-catamaran text-base ">Un plan con principio y final, no una dependencia eterna.</div>
                                    </div>

                              </div>
                        </div>
                  </div>
            </Container>
      )
}

export default AboutHistory
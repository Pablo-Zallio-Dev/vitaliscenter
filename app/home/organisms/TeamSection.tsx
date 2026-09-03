import React from 'react'
import SubHeading from '../../components/atoms/SubHeading'
import TextElement from '../../components/atoms/TextElement'
import ButtonSecondary from '../../components/atoms/ButtonSecondary'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

const TeamSection = () => {
      return (
            <section className="flex justify-center py-20 md:py-30 px-5 md:px-12 bg-background-dark ">
                  <div className=" w-full max-w-336">
                        <div className=" flex flex-col md:flex-row md:justify-between gap-12 ">
                              <div className="">
                                    <SubHeading number={'02'} text={'el equipo'} dark />
                                    <TextElement variant={'heading-lg'} as={'h3'} dark className=' max-w-2xs ' >
                                          Quien te va a tratar
                                    </TextElement>

                              </div>
                              <div className=" self-end ">
                                    <TextElement variant={'text'} as={'p'} dark className=' py-5 max-w-lg ' >
                                          Personas con nombre y apellidos. Eliges profesional al pedir cita y esa persona te acompaña todo el proceso.
                                    </TextElement>
                                    <ButtonSecondary text={'conocer al equipo'} href={'/nosotros#aboutteam'} variant={'light'} />
                              </div>
                        </div>
                        <section className=" flex flex-col sm:flex-row sm:justify-around gap-6 mt-20 ">

                              <div className=" relative group w-full sm:max-w-115 group overflow-hidden">
                                    <div className=" relative w-full h-125 sm:max-w-115  ">
                                          <Image src='/images/image_team_01.webp' alt={''} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-500 " />
                                    </div>
                                    <div className=" absolute bottom-0 flex flex-col gap-2 w-full pt-40 pb-4 px-5 bg-linear-to-b from-transparent to-background-dark overflow-hidden ">
                                          <p className="text-[10px] font-semibold font-catamaran uppercase tracking-widest text-accent ">fisioterapeuta - terapia manual</p>
                                          <h3 className=" font-crimsonText font-semibold text-2xl text-cream ">Alex Ferrer</h3>
                                          <p className=" pt-2 font-catamaran text-cream text-sm ">Especializado en dolor de espalda y recuperación de lesiones.</p>
                                          <Link href={'/contacto'} className='w-full flex gap-2 text-cream font-catamaran uppercase text-sm hover:text-accent hover:underline transition-all duration-500 '>Pedir cita con alex <BsArrowRight /></Link>

                                    </div>


                              </div>

                              <div className=" relative group w-full sm:max-w-115 group overflow-hidden ">
                                    <div className=" relative w-full h-125 sm:max-w-115  ">
                                          <Image src='/images/image_team_02.webp' alt={''} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-500 " />
                                    </div>
                                    <div className=" absolute bottom-0 flex flex-col gap-2 w-full pt-40 pb-4 px-5 bg-linear-to-b from-transparent to-background-dark overflow-hidden ">
                                          <p className="text-[10px] font-semibold font-catamaran uppercase tracking-widest text-accent ">fisioterapeuta readaptaciòn</p>
                                          <h3 className=" font-crimsonText font-semibold text-2xl text-cream ">Marta Gil</h3>
                                          <p className=" pt-2 font-catamaran text-cream text-sm ">Acompaña el paso del tratamiento al movimiento sin miedo.</p>
                                          <Link href={'/contacto'} className='w-full flex gap-2 text-cream font-catamaran uppercase text-sm hover:text-accent hover:underline transition-all duration-500 '>Pedir cita con Maria <BsArrowRight /></Link>

                                    </div>


                              </div>







                        </section>
                  </div>
            </section>
      )
}

export default TeamSection

/* 



<div className="  flex flex-col sm:flex-row sm:justify-between gap-12 mt-20  ">
                              <div className=" relative w-full sm:max-w-115 aspect-3/4 overflow-hidden group ">
                                    <Image src='/images/image_team_01.webp' alt='' fill className="object-cover object-center " />
                                    <div className="  flex flex-col gap-2 w-full pt-40 pb-4 px-5 bg-linear-to-b from-transparent to-background-dark  ">
                                          <div className=" absolute -bottom-6 group-hover:-translate-y-8 transition-transform duration-200 ">
                                          <p className="text-[10px] font-semibold font-catamaran uppercase tracking-widest text-accent ">fisioterapeuta - terapia manual</p>
                                          <h3 className=" font-crimsonText font-semibold text-2xl text-cream ">Alex Ferrer</h3>
                                          <p className=" font-catamaran text-cream text-sm ">Especializado en dolor de espalda y recuperación de lesiones.</p>
                                          </div>
                                    </div>
                                          <Link href={''} className=' absolute bottom-0 w-full flex gap-2 pt-2 px-5 text-cream font-catamaran uppercase text-sm bg-background-dark '>Pedir cita con alex <BsArrowRight /></Link>
                              </div>
                              <div className=" relative w-full sm:max-w-115 aspect-3/4 overflow-hidden ">
                                    <Image src='/images/image_team_02.webp' alt='' fill className="object-cover object-center " />
                                    <div className=" absolute bottom-0 flex flex-col gap-2 w-full pt-40 pb-4 px-5 bg-linear-to-b from-transparent to-background-dark ">
                                          <p className="text-[10px] font-semibold font-catamaran uppercase tracking-widest text-accent ">fisioterapeuta readaptacion</p>
                                          <h3 className=" font-crimsonText font-semibold text-2xl text-cream ">Alex Ferrer</h3>
                                          <p className=" font-catamaran text-cream text-sm ">Acompaña el paso del tratamiento al movimiento sin miedo.</p>
                                          <Link href={''} className='flex gap-2 items-center pt-2 text-cream font-catamaran uppercase text-sm '>Pedir cita con marta <BsArrowRight /></Link>
                                    </div>
                              </div>
                        </div>
                        
                        
                        
                        */
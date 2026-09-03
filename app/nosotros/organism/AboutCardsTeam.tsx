import ButtonSecondary from '@/app/components/atoms/ButtonSecondary'
import SubHeading from '@/app/components/atoms/SubHeading'
import TextElement from '@/app/components/atoms/TextElement'
import Image from 'next/image'
import React from 'react'

const AboutCardsTeam = () => {
      return (
            <section className=" pt-24 grid grid-cols-1 gap-28 pb-12 ">
                  <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 group ">
                        <Image src={'/images/image_team_01.webp'} alt={''} width={800} height={1200} className=' w-full max-w-md group-hover:scale-102 transition-transform duration-700 ' />
                        <div className=" self-end w-full max-w-110 ">
                              <SubHeading text={'Fisioterapeuta · Terapia manual'} number='01' dark />
                              <TextElement variant={'heading-lg'} as={'h3'} dark className=' mt-5 '>
                                    Álex Ferrer
                              </TextElement>
                              <TextElement variant={'text'} as={'p'} dark className='mt-5'>
                                    Álex fundó Vitalis Center con una idea simple: dedicar el tiempo necesario a cada persona. Trabaja sobre todo con dolor de espalda y cuello, y con procesos de recuperación que necesitan continuidad.
                              </TextElement>
                              <div className="flex flex-col gap-3 mt-7 pb-7">
                                    <TextElement variant={'text'} as={'p'} dark>Grado en Fisioterapia · Universitat de València</TextElement>
                                    <TextElement variant={'text'} as={'p'} dark>Formación en terapia manual ortopédica</TextElement>
                                    <TextElement variant={'text'} as={'p'} dark>Más de 10 años tratando pacientes en Torrent</TextElement>
                              </div>
                              <ButtonSecondary text={'pedir cita con álex'} href={'/contacto'} variant={'light'} />
                        </div>
                  </div>

                  <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 group ">
                        <Image src={'/images/image_team_02.webp'} alt={''} width={800} height={1200} className=' md:order-1 w-full max-w-md group-hover:scale-102 transition-transform duration-700 ' />
                        <div className=" self-end w-full max-w-110 ">
                              <SubHeading text={'Fisioterapeuta · Terapia manual'} number='01' dark />
                              <TextElement variant={'heading-lg'} as={'h3'} dark className=' mt-5 '>
                                    Marta Gil
                              </TextElement>
                              <TextElement variant={'text'} as={'p'} dark className='mt-5'>
                                    Marta se ocupa de la fase en la que el dolor baja y hay que volver a moverse con confianza. Su trabajo une el tratamiento manual con ejercicio progresivo y muchas explicaciones por el camino.
                              </TextElement>
                              <div className="flex flex-col gap-3 mt-7 pb-7 ">
                                    <TextElement variant={'text'} as={'p'} dark>Grado en Fisioterapia</TextElement>
                                    <TextElement variant={'text'} as={'p'} dark>Especialización en readaptación deportiva</TextElement>
                                    <TextElement variant={'text'} as={'p'} dark>Formación en ejercicio terapéutico</TextElement>
                              </div>
                              <ButtonSecondary text={'pedir cita con álex'} href={'/contacto'} variant={'light'} />
                        </div>
                  </div>
            </section>
      )
}

export default AboutCardsTeam
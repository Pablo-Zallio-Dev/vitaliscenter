import ButtonPrimary from '@/app/components/atoms/ButtonPrimary'
import ButtonSecondary from '@/app/components/atoms/ButtonSecondary'
import Container from '@/app/components/atoms/Container'
import SubHeading from '@/app/components/atoms/SubHeading'
import TextElement from '@/app/components/atoms/TextElement'
import Image from 'next/image'
import React from 'react'

const AboutCenter = () => {
      return (
            <Container className='  bg-background py-18 '>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                              <Image src={'/images/image_centre_01.webp'} alt={''} width={800} height={200} className=' md:col-span-2 ' />
                        <div className=" flex flex-col gap-5 max-w-105 md:self-end ">
                              <SubHeading text={'el centro'} number='04' />
                              <TextElement variant={'heading-md'} as={'h3'}>
                                    Un espacio sin prisa
                              </TextElement>
                              <TextElement variant={'text'} as={'p'} className=' leading-2 ' >
                                    Salas individuales de tratamiento, una zona amplia de entrenamiento y readaptación con material de fuerza y movilidad, y una recepción tranquila donde esperar cómodamente.
                              </TextElement>
                        </div>
                              <Image src={'/images/image_centre_02.webp'} alt={''} width={800} height={400} className='   ' />
                        <div className=" flex flex-col gap-5 max-w-105 md:self-center md:place-self-center md:col-span-2 w-full ">
                              <TextElement variant={'text'} as={'p'} className=' leading-2 ' >
                                    Salas individuales de tratamiento, una zona amplia de entrenamiento y readaptación con material de fuerza y movilidad, y una recepción tranquila donde esperar cómodamente.
                              </TextElement>
                              <div className=" flex flex-col sm:flex-row gap-3 ">
                                    <ButtonPrimary text={'ven a conocerlo'} href={'/contacto'}  />
                                    <ButtonSecondary target='_blank' text={'whatsapp'} href={'https://wa.me/34623456789'} variant={'dark'}   />
                              </div>
                        </div>

                  </div>
            </Container>
      )
}

export default AboutCenter
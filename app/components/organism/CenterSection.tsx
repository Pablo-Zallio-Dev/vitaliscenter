import Image from 'next/image'
import React from 'react'
import SubHeading from '../atoms/SubHeading'
import TextElement from '../atoms/TextElement'
import ButtonSecondary from '../atoms/ButtonSecondary'

const CenterSection = () => {
      return (
            <section className=" flex justify-center w-full py-20 md:py-28 px-5 md:px-12 bg-background  ">
                  <div className=" flex flex-col gap-18  w-full max-w-336 pb-10 border-b border-border-25  ">

                        <div className=" flex flex-col lg:flex-row lg:justify-between gap-12 ">
                              <Image
                                    src='/images/image_centre_01.webp'
                                    alt={''}
                                    width={800}
                                    height={400}
                                    className="w-full max-w-170 h-auto object-contain"
                              />
                              <div className=" lg:self-end ">
                                    <SubHeading number={'03'} text={'el centro'} />
                                    <TextElement variant={'heading-lg'} as={'h2'} className='pt-5 ' >
                                          Un espacio sin prisa
                                    </TextElement>
                                    <TextElement variant={'text'} as={'p'} className='pt-5 pb-8 max-w-80 '>
                                          Salas individuales para el trabajo manual y una zona amplia de entrenamiento y readaptación, en pleno centro de Torrent. Trabajamos siempre con cita previa para que nadie espere.
                                    </TextElement>
                                    <ButtonSecondary text={'ver instalaciones'} href={''} variant={'dark'} />
                              </div>
                        </div>
                        <div className=" grid grid-cols-1 lg:grid-cols-3 ">
                              <Image
                                    src='/images/image_centre_03.webp'
                                    alt={''}
                                    width={800}
                                    height={400}
                                    className="w-full max-w-170 h-auto object-contain"
                              />
                              <div className=" flex flex-col gap-4 lg:self-center py-12 lg:px-6 2xl:px-24   lg:py-0 ">
                                    <TextElement variant={'heading-md'} as={'p'} className=' '>
                                          “Una camilla, mucho tiempo por persona y la convicción de que el tratamiento funciona mejor con movimiento.”
                                    </TextElement>
                                    <hr className=' border-t border-border-25 ' />
                                    <p className=" text-xs font-catamaran uppercase text-text/50 tracking-widest ">alex ferrer - fundador</p>
                              </div>
                              <Image
                                    src='/images/image_centre_02.webp'
                                    alt={''}
                                    width={800}
                                    height={400}
                                    className="w-full max-w-170 h-auto object-contain"
                              />
                        </div>
                  </div>
            </section>
      )
}

export default CenterSection
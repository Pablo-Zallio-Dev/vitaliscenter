import Image from 'next/image'
import TextElement from '../../components/atoms/TextElement'
import SubHeading from '../../components/atoms/SubHeading'

const SuccessSection = () => {
      return (

            <section className=" flex flex-col items-center justify-center w-full px-5 md:px-12 bg-background  ">
                  <div className=" w-full max-w-336">
                        <div className=" flex flex-col md:flex-row md:justify-between gap-8  ">
                              <div className="">
                                    <SubHeading number={'04'} text={'casos de exito'} />
                                    <TextElement variant={'heading-lg'} as={'h3'} className=' max-w-96 ' >
                                          Historias que acabaron bien
                                    </TextElement>

                              </div>
                              <div className=" lg:self-end ">
                                    <TextElement variant={'text'} as={'p'} className=' py-5 max-w-64 ' >
                                          Procesos reales del centro, con su punto de partida, su plan y su resultado.
                                    </TextElement>
                              </div>
                        </div>
                  </div>

                  <div className=" flex flex-col md:flex-row gap-18 w-full max-w-336 md:pt-10 md:pb-12 mb-12 md:mb-24 border-b border-border-25  ">
                        <div className=" ">
                              <div className="">

                              <Image
                                    src='/images/image_success_01.webp'
                                    alt={''}
                                    width={800}
                                    height={400}
                                    className="w-full max-w-170 h-auto object-contain lg:hover:scale-102 transition-transform duration-500"
                              />
                              </div>
                              <div className=" flex flex-col gap-4 pt-12 ">
                                    <h3 className=" tracking-[0.24em] font-catamaran text-xs uppercase text-accent ">fisioterapia y terapia manual</h3>
                                    <TextElement variant={'heading-lg'} as={'h3'}>
                                          Volver a entrenar sin dolor lumbar
                                    </TextElement>
                                    <TextElement variant={'text'} as={'p'}>
                                          Llegó tras años de molestias lumbares cada vez que levantaba peso. Combinamos tratamiento manual con un trabajo de fuerza progresivo y pautas claras entre sesiones.
                                    </TextElement>
                                    <hr className=' border-t border-border-25 ' />
                                    <TextElement variant={'heading-md'} as={'h3'}>
                                          “Por primera vez entendí qué me pasaba y qué tenía que hacer.”
                                    </TextElement>
                                    <p className=" text-xs uppercase font-catamaran tracking-widest ">Hombre, 38 años · Entrenamiento con normalidad a los 3 meses</p>
                              </div>
                        </div>
                        <div className=" grid grid-cols-1 gap-8  ">
                              <div className="">
                                    <Image
                                          src='/images/image_success_03.webp'
                                          alt={''}
                                          width={400}
                                          height={200}
                                          className="w-full max-w-170 h-auto object-contain lg:hover:scale-102 transition-transform duration-500"
                                    />
                                    <div className=" flex flex-col gap-3 py-4 ">
                                          <h3 className=" tracking-[0.24em] font-catamaran text-xs uppercase text-accent ">Recuperación y readaptación</h3>
                                          <TextElement variant={'heading-md'} as={'h3'}>
                                                Recuperación muscular
                                          </TextElement>
                                          <TextElement variant={'text'} as={'p'}>
                                                Vuelta al deporte sin recaídas
                                          </TextElement>
                                    </div>
                              </div>
                              <div className="">
                                    <Image
                                          src='/images/image_success_02.webp'
                                          alt={''}
                                          width={400}
                                          height={200}
                                          className="w-full max-w-170 h-auto object-contain lg:hover:scale-102 transition-transform duration-500"
                                    />
                                    <div className=" flex flex-col gap-3 py-4 ">
                                          <h3 className=" tracking-[0.24em] font-catamaran text-xs uppercase text-accent ">Entrenamiento personal</h3>
                                          <TextElement variant={'heading-md'} as={'h3'}>
                                                Ganar fuerza después de los 50
                                          </TextElement>
                                          <TextElement variant={'text'} as={'p'}>
                                                Más autonomía y menos molestias cervicales
                                          </TextElement>
                                    </div>
                              </div>
                        </div>

                  </div>


            </section>

      )
}

export default SuccessSection







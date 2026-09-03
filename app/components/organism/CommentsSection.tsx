import React from 'react'
import TextElement from '../atoms/TextElement'
import Link from 'next/link'

const CommentsSection = () => {
      return (
            <div className=" flex flex-col items-center pt-12 pb-20 md:pb-28 px-5 md:px-12 bg-background ">
                  <div className=" w-full max-w-336  ">
                        <div className=" flex flex-col gap-8 md:flex-row md:justify-between md:items-center ">
                              <TextElement variant={'heading-lg'} as={'h3'} >
                                    Lo que dicen quienes ya han pasado por aquí
                              </TextElement>
                              <Link target='_blank' className=' text-accent hover:text-text font-catamaran uppercase tracking-widest text-xs transition-colors duration-200 ' href={'https://www.google.com/maps'}>Opiniones en google</Link>
                        </div>
                        <div className=" flex flex-wrap gap-12 xl:gap-32 py-10 justify-center">
                              <div className=" flex flex-col justify-between gap-3 max-w-90 pt-6 border-t border-border-25/75 ">
                                    <TextElement variant={'heading-md'} as={'p'}>
                                          “Muy buen trato y un trabajo excelente. Llevaba meses con dolor lumbar y en pocas sesiones noté un cambio real. Explican todo muy bien.”
                                    </TextElement>
                                    <p className=" text-xs uppercase font-catamaran tracking-widest ">Juan Pérez · Marzo 2026 · Google</p>
                              </div>
                              <div className=" flex flex-col justify-between gap-3 max-w-90 pt-6 border-t border-border-25/75 ">
                                    <TextElement variant={'heading-md'} as={'p'}>
                                          “Se toman su tiempo con cada persona, no te sientes uno más. El centro es cómodo y muy limpio, y salgo siempre con pautas claras.”
                                    </TextElement>
                                    <p className=" text-xs uppercase font-catamaran tracking-widest ">Laura Sanchis · Febrero 2026 · Google</p>
                              </div>
                              <div className=" flex flex-col justify-between gap-3 max-w-90 pt-6 border-t border-border-25/75 ">
                                    <TextElement variant={'heading-md'} as={'p'}>
                                          “Vine por una lesión de rodilla y acabé quedándome con el entrenamiento personal. Profesionales y muy cercanos.”
                                    </TextElement>
                                    <p className=" text-xs uppercase font-catamaran tracking-widest ">Carlos Ibáñez · Enero 2026 · Google</p>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default CommentsSection
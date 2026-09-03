import React from 'react'
import Logo from '../atoms/Logo'
import TextElement from '../atoms/TextElement'
import IconText from '../molecules/IconText'
import { BsEnvelope, BsPinMap, BsTelephone } from 'react-icons/bs'
import { MdOutlineWatchLater } from 'react-icons/md'

const Footer = () => {
      return (
            <section className=" flex flex-col bg-background-dark text-cream ">
                  <section className=" flex justify-center py-10 px-5 md:px-12  ">
                        <div className=" grid grid-cols-1 md:grid-cols-2 md:justify-items-center gap-12 w-full max-w-336  ">

                              <div className="">
                                    <Logo dark />
                                    <TextElement variant={'text'} as={'p'} dark className='pt-3'>
                                          Cuéntanos qué te pasa y te decimos con sinceridad si podemos ayudarte.
                                    </TextElement>
                                    <div className=" flex flex-col gap-3 pt-6 ">
                                          <IconText className='items-center' icon={BsPinMap} text='Carrer Pintor Renau, 42, 46900 Torrent, Valencia' href='https://www.google.com/maps' />
                                          <IconText className='items-center' icon={BsTelephone} text='696 12 34 56' href='tel:+34678567876' />
                                          <IconText className='items-center' icon={BsEnvelope} text='hola@somgenial.com' href='mailto:elcorreoquequieres@correo.com' />
                                    </div>
                              </div>

                              <div className=" flex flex-col gap-5 ">
                                    <h3 className=" font-crimsonText text-lg font-semibold ">Horarios</h3>
                                    <div className="flex flex-col gap-3">
                                          <IconText icon={MdOutlineWatchLater} text='Lunes a Viernes' textDescription='09:00 – 14:00 · 16:00 – 21:00' href='' />
                                          <IconText icon={MdOutlineWatchLater} text='Sábado' textDescription='09:00 – 14:00' href='' />
                                          <IconText icon={MdOutlineWatchLater} text='Domingo' textDescription='Cerrado' href='' />
                                    </div>
                              </div>
                        </div>
                  </section>
                  <hr className=" w-full border-b border-cream/10 " />
                  <div className=" flex flex-col md:flex-row md:justify-around gap-2 pt-6 pb-12 px-5 md:px-12 ">
                        <p className=" font-catamaran text-xs text-cream/50 ">© 2026 VitalisCenter. Todos los derechos reservados.</p>
                        <p className=" font-catamaran text-xs text-cream/50 ">Aviso legal Política de privacidad Cookies</p>
                  </div>
            </section>
      )
}

export default Footer
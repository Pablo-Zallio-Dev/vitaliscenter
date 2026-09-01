import React from 'react'
import TextElement from '../atoms/TextElement'
import ButtonPrimary from '../atoms/ButtonPrimary'
import ButtonSecondary from '../atoms/ButtonSecondary'
import HeroServiceItem from '../molecules/HeroServiceItem'

const HeroSection = () => {
      return (
            <section className=" w-full min-h-screen bg-[url('/images/image_hero_mobile.webp')] md:bg-[url('/images/image_hero.webp')] bg-cover bg-center ">
                  <section className=" flex flex-col items-center   w-full  bg-background-dark/50">
                        <section className=" flex flex-col justify-center items-center gap-8 w-full  max-w-4xl h-screen px-5  ">

                              <p className=" font-catamaran text-sm tracking-widest text-cream uppercase ">torrent - valencia - desde 2014 </p>
                              <TextElement  center dark as='h1' variant={'heading-xxl'} >
                                    Cuidamos tu cuerpo para que vuelvas a moverte bien
                              </TextElement>
                              <div className=" max-w-lg ">
                              <TextElement dark center variant={'text'} as={'p'} className=' ' >
                                    Técnicas manuales, fisioterapia, entrenamiento personal y tratamiento del dolor. Una sola persona por sesión, el tiempo que haga falta.
                              </TextElement>
                              </div>
                              <div className=" flex flex-col lg:flex-row gap-3 ">
                                    <ButtonPrimary text={'solicitar cita'} href={'/contacto'} />
                                    <ButtonSecondary text={'whatsapp'} href={''} variant={'light'} />
                              </div>
                        </section>
                        <div className=" flex justify-center w-full border-t border-cream">
                              <HeroServiceItem />

                        </div>
                  </section>
            </section>
      )
}

export default HeroSection
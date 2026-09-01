import React from 'react'
import SubHeading from '../atoms/SubHeading'
import TextElement from '../atoms/TextElement'
import Link from 'next/link'
import ButtonPrimary from '../atoms/ButtonPrimary'
import ButtonSecondary from '../atoms/ButtonSecondary'


interface CtaSectionProps {
      subtitle: string,
      text: string,
      description: string
}
const CtaSection = ({ subtitle, text, description }: CtaSectionProps) => {
      return (
            <section className="flex justify-center py-16 md:py-24 px-5 md:px-12 bg-background-dark">
                  <div className="flex flex-col md:flex-row md:justify-between gap-18 w-full max-w-336">
                        <div className="flex flex-col gap-3">
                              <SubHeading text={subtitle} dark />
                              <TextElement variant={'heading-lg'} dark as={'h2'} className='max-w-lg' >
                                    {text}
                              </TextElement>
                              <TextElement variant={'text'} dark as={'p'}>
                                    {description}
                              </TextElement>
                        </div>
                        <div className="flex flex-col gap-6 lg:w-96">
                              <TextElement variant={'text'} dark as={'p'}>
                                    Carrer Pintor Renau, 42, 46900 Torrent, Valencia
                              </TextElement>
                              <Link className='text-cream text-2xl font-semibold font-crimsonText' href={''} >623 12 34 56</Link>
                              <div className="flex flex-col gap-4">
                                    <ButtonPrimary text={'Solicitar cita'} href={''} full />
                                    <ButtonSecondary full text={'whatsapp'} href={''} variant={'light'} />
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default CtaSection
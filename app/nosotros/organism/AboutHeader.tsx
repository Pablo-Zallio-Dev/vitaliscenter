import Container from '@/app/components/atoms/Container'
import FadeIn from '@/app/components/atoms/FadeIn'
import SubHeading from '@/app/components/atoms/SubHeading'
import TextElement from '@/app/components/atoms/TextElement'
import React from 'react'

const AboutHeader = () => {
      return (
            <Container className=' pt-34 md:pt-20 bg-background'>
                  <SubHeading text={'nosotros'} number='01' />
                  <div >
                        <FadeIn className=" flex flex-col gap-10 md:flex-row md:justify-between mt-8 pb-12 ">

                        <div className=" max-w-140 ">
                              <TextElement variant={'heading-xl'} as={'h1'}>
                                    Un centro pequeño, mucho tiempo por persona
                              </TextElement>
                        </div>
                        <div className="w-full md:max-w-90 md:self-end ">
                              <TextElement variant={'text'} as={'p'} className=' pb-6 '>
                                     Vitalis Center nació en Torrent con la intención de hacer las cosas de otra manera: menos volumen de pacientes y más atención real.
                              </TextElement>
                              <div className=" grid grid-cols-2 w-full border-t border-border-25  ">
                                    <div className=" pt-6 flex flex-col gap-3  ">
                                          <div className="">
                                                <p className=" pb-1 uppercase font-catamaran text-xs text-text/50 ">desde</p>
                                                <p className=" uppercase font-catamaran text-sm text-text ">2014</p>
                                          </div>
                                          <div className="">
                                                <p className=" pb-1 uppercase font-catamaran text-xs text-text/50 ">desde</p>
                                                <p className=" uppercase font-catamaran text-sm text-text ">2014</p>
                                          </div>
                                    </div>
                                    <div className=" pt-6 flex flex-col gap-3  ">
                                          <div className="">
                                                <p className=" pb-1 uppercase font-catamaran text-xs text-text/50 ">desde</p>
                                                <p className=" uppercase font-catamaran text-sm text-text ">2014</p>
                                          </div>
                                          <div className="">
                                                <p className=" pb-1 uppercase font-catamaran text-xs text-text/50 ">desde</p>
                                                <p className=" uppercase font-catamaran text-sm text-text ">2014</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        </FadeIn>
                  </div>
            </Container>
      )
}

export default AboutHeader
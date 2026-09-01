import Image from 'next/image'
import React from 'react'
import ServiceButtonNav from '../atoms/ServiceButtonNav'
import TextElement from '@/app/components/atoms/TextElement'
import { DATA_SERVICES } from '../data/data.services'
import ButtonPrimary from '@/app/components/atoms/ButtonPrimary'
import ButtonSecondary from '@/app/components/atoms/ButtonSecondary'

const ServicesTreatments = () => {
      return (
            <section className=" flex justify-center pt-10  px-5 sm:px-10 md:px-20 pb-10 md:pb-15  bg-background ">
                  <div className=" w-full max-w-336 ">
                        {
                              DATA_SERVICES.treatments.map((treatments, index) => {
                                    const isEven = index % 2 === 1;


                                    return (
                                          <div id={treatments.title} key={treatments.number} className=" grid grid-cols-1 xl:grid-cols-4  gap-12 pt-12 pb-14 border-b border-border-25/30 group ">
                                                <div className={`md:col-span-2 md:justify-self-center lg:self-start ${isEven ? 'lg:order-2' : ''} overflow-hidden`}>
                                                      <Image src={treatments.image} alt={''} width={400} height={800} className=' w-full max-w-3xl group-hover:scale-105 transition-transform duration-500 ease-in-out ' />
                                                </div>
                                                <div className={` flex flex-col w-full justify-self-center ${isEven ? 'xl:justify-self-start' : 'xl:justify-self-end'}  md:col-span-2 max-w-125 `}>
                                                      <ServiceButtonNav line id={'01'} name={'Tratamiento'} />
                                                      <TextElement variant={'heading-lg'} as={'h3'} className=' max-w-xl pt-5 ' >
                                                            {treatments.title}
                                                      </TextElement>
                                                      <TextElement variant={'text'} as={'p'} className=' pt-5 pb-8 ' >
                                                            {treatments.description}
                                                      </TextElement>
                                                      {
                                                            treatments.features.map((feature) => (
                                                                  <div key={feature.number} className=" py-4 border-t border-border-25 ">
                                                                        <ServiceButtonNav id={feature.number} name={feature.text} line={false} />
                                                                  </div>
                                                            ))
                                                      }
                                                      <div className=" flex flex-col md:flex-row gap-4 w-full ">
                                                            <ButtonPrimary text={treatments.cta.appointment.text} href={treatments.cta.appointment.href} />
                                                            <ButtonSecondary text={treatments.cta.whatsapp.text} href={treatments.cta.whatsapp.href} variant={'dark'} />
                                                      </div>
                                                </div>
                                          </div>
                                    )
                              })
                        }
                  </div>
            </section>
      )
}

export default ServicesTreatments



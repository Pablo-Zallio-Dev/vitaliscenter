'use client'
import { motion } from 'motion/react';  // 👈 añadir este import
import Image from 'next/image'
import ServiceButtonNav from '../atoms/ServiceButtonNav'
import TextElement from '@/app/components/atoms/TextElement'
import { DATA_SERVICES } from '../data/data.services'
import ButtonPrimary from '@/app/components/atoms/ButtonPrimary'
import ButtonSecondary from '@/app/components/atoms/ButtonSecondary'
import FadeIn from '@/app/components/atoms/FadeIn'

const ServicesTreatments = () => {

      const featuresContainer = {
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } }
      };

      const featureItem = {
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
      };



      return (
            <section className=" flex justify-center pt-10  px-5 sm:px-10 md:px-20 pb-10 md:pb-15  bg-background ">
                  <div className={`  w-full max-w-336 `}>
                        {
                              DATA_SERVICES.treatments.map((treatments, index) => {
                                    const isEven = index % 2 === 1;
                                    return (
                                          <div id={treatments.id} key={treatments.number} className={` grid grid-cols-1 xl:grid-cols-4  gap-12 pt-20 md:pt-30 pb-14 border-b border-border-25/30 group  `}>
                                                <div className={`md:col-span-2 md:justify-self-center lg:self-start ${isEven ? 'lg:order-2' : ''} overflow-hidden `}>
                                                      <FadeIn
                                                            direction={isEven ? 'right' : 'left'}
                                                            className={`md:col-span-2 md:justify-self-center lg:self-start ${isEven ? 'lg:order-2' : ''} overflow-hidden`}
                                                      >
                                                            <Image src={treatments.image} alt={''} width={400} height={800} className=' w-full max-w-3xl group-hover:scale-105 transition-transform duration-500 ease-in-out ' />
                                                      </FadeIn>
                                                </div>
                                                <div className={` flex flex-col w-full justify-self-center ${isEven ? 'xl:justify-self-start' : 'xl:justify-self-end'}  md:col-span-2 max-w-125 `}>
                                                      <FadeIn
                                                            direction={!isEven ? 'right' : 'left'}
                                                            className={`md:col-span-2 md:justify-self-center lg:self-start ${isEven ? 'lg:order-2' : ''} overflow-hidden`}
                                                      >
                                                            <ServiceButtonNav line id={treatments.number} name={'Tratamiento'} />
                                                            <TextElement variant={'heading-lg'} as={'h3'} className=' max-w-xl pt-5 ' >
                                                                  {treatments.title}
                                                            </TextElement>
                                                            <TextElement variant={'text'} as={'p'} className=' pt-5 pb-8 ' >
                                                                  {treatments.description}
                                                            </TextElement>
                                                            <motion.div
                                                                  variants={featuresContainer}
                                                                  initial="hidden"
                                                                  whileInView="show"
                                                                  viewport={{ once: true, amount: 0.2 }}
                                                            >

                                                                  {
                                                                        treatments.features.map((feature) => (
                                                                              <div key={feature.number} className=" py-4 border-t border-border-25 ">
                                                                                    <ServiceButtonNav id={feature.number} name={feature.text} line={false} />
                                                                              </div>
                                                                        ))
                                                                  }
                                                            </motion.div>
                                                            <div className=" flex flex-col md:flex-row gap-4 w-full ">
                                                                  <ButtonPrimary text={treatments.cta.appointment.text} href={treatments.cta.appointment.href} />
                                                                  <ButtonSecondary target='_blank' text={treatments.cta.whatsapp.text} href={treatments.cta.whatsapp.href} variant={'dark'} />
                                                            </div>
                                                      </FadeIn>
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



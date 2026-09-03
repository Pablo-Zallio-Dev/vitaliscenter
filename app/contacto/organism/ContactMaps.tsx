import ButtonSecondary from '@/app/components/atoms/ButtonSecondary'
import Container from '@/app/components/atoms/Container'
import TextElement from '@/app/components/atoms/TextElement'
import React from 'react'

const ContactMaps = () => {
      return (
            <>
                  <Container className=' bg-background '>
                        <div className="">
                              <div className=" grid grid-cols-1 md:grid-cols-3 gap-8  w-full pb-8 ">
                                    <TextElement variant={'heading-lg'} as={'h3'}>Cómo llegar</TextElement>
                                    <TextElement variant={'text'} as={'p'} className=' max-w-85 md:justify-self-center '>A cinco minutos a pie del centro de Torrent, con zona de aparcamiento en la misma calle.</TextElement>
                                    <div className=" md:justify-self-end ">
                                          <ButtonSecondary target='_blank' text={'google maps'} href={'https://www.google.com/maps'} variant={'dark'} />
                                    </div>
                              </div>
                        </div>
                  </Container>
                  <div className=" w-full  ">
                        <iframe className=' w-full h-72 md:h-115 md:grayscale md:hover:grayscale-0 transition-all duration-300 ' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12326.307977168892!2d-0.47855064999999997!3d39.4336889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1788340058578!5m2!1ses!2ses" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                  </div>
            </>
      )
}

export default ContactMaps
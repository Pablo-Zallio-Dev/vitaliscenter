'use client'
import Container from '@/app/components/atoms/Container'
import FadeIn from '@/app/components/atoms/FadeIn'
import SubHeading from '@/app/components/atoms/SubHeading'
import TextElement from '@/app/components/atoms/TextElement'
import Link from 'next/link'
import { BsBoxArrowInUpRight } from 'react-icons/bs'

const ContactBusinessInfo = () => {
      const LOCATION = {
            "location": [
                  {
                        "id": "address",
                        "label": "Dirección",
                        "text": "Carrer Pintor Renau, 42, 46900 Torrent, Valencia",
                        "href": "https://www.google.com/maps/search/?api=1&query=Carrer+Pintor+Renau+42+46900+Torrent+Valencia"
                  },
                  {
                        "id": "phone",
                        "label": "Teléfono",
                        "text": "623 45 67 89",
                        "href": "tel:+34623456789"
                  },
                  {
                        "id": "whatsapp",
                        "label": "WhatsApp",
                        "text": "Escribir ahora",
                        "href": "https://wa.me/34623456789"
                  },
                  {
                        "id": "email",
                        "label": "Email",
                        "text": "hola@vitaliscenter.com",
                        "href": "mailto:hola@vitaliscenter.com"
                  }
            ]
      }


      const SCHEDULE = {
            "schedule": [
                  { "day": "Lunes a viernes", "hours": "09:00 – 14:00 · 16:00 – 21:00" },
                  { "day": "Sábado", "hours": "09:00 – 14:00" },
                  { "day": "Domingo", "hours": "Cerrado" }
            ]
      }


      return (
            <Container className=' pb-16 bg-background '>
                  <div className=" grid grid-cols-1 md:grid-cols-3 gap-24  ">
                        <FadeIn
                              direction='left'
                              className={` col-span-2 w-full max-w-187`}
                        >

                              <div className=" col-span-2 w-full max-w-187 ">
                                    <SubHeading text={'dónde estamos'} number='02' />
                                    <div className=" mt-6 ">
                                          {
                                                LOCATION.location.map((item) => (
                                                      <Link target='_blank' key={item.id} className=" grid grid-cols-4 py-4 border-t border-border-25/30 font-catamaran group " href={item.href}>
                                                            <h3 className="  text-[10px] tracking-widest uppercase "> {item.label} </h3>
                                                            <p className=" text-[15px] col-span-2 group-hover:text-accent transition-colors duration-300 "> {item.text} </p>
                                                            <BsBoxArrowInUpRight className=' justify-self-end group-hover:text-accent transition-colors duration-300 ' />

                                                      </Link>
                                                ))
                                          }
                                    </div>
                              </div>
                        </FadeIn>
                            <FadeIn
                              direction='right'
                        >

                        <div className="">
                              <SubHeading text={'horarios'} number='03' />
                              <div className=" mt-6 ">
                                    {
                                          SCHEDULE.schedule.map((item) => (
                                                <div key={item.day} className=" py-4 border-t border-border-25/30 ">
                                                      <h3 className="  text-[10px] tracking-widest uppercase  "> {item.day} </h3>
                                                      <p className=" font-crimsonText font-semibold text-2xl "> {item.hours} </p>
                                                </div>
                                          ))
                                    }
                              </div>
                              <TextElement variant={'text'} as={'p'}>Trabajamos siempre con cita previa para que nadie tenga que esperar.</TextElement>
                        </div>
                        </FadeIn>
                  </div>
            </Container>
      )
}

export default ContactBusinessInfo
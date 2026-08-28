import React from 'react'
import Icon from '../atoms/Icon'
import { BsEnvelope, BsTelephone } from 'react-icons/bs'
import Link from 'next/link'

const ContactInfo = () => {
      return (
            <section className=" flex flex-col lg:flex-row gap-2 lg:gap-6 font-catamaran text-sm  ">
                  {/* Este link es para Whatsapp */}
                  <Link className=" flex items-center gap-3 " href={''}>
                        <Icon icon={BsTelephone} />
                        <p className=" ">623 12 34 56</p>
                  </Link>
                  {/* Aqui un link a mail o  a form */}
                  <Link className='flex items-center gap-3' href={''}>
                        <Icon icon={BsEnvelope} />
                        <p className=""> info@mail.com </p>
                  </Link>
            </section>
      )
}

export default ContactInfo
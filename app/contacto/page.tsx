import React from 'react'
import ContactHeader from './organism/ContactHeader'
import ContactBusinessInfo from './organism/ContactBusinessInfo'
import ContactMaps from './organism/ContactMaps'
import ContactFormSection from './organism/ContactFormSection'
import CtaSection from '../components/organism/CtaSection'

const Contacto = () => {
  return (
    <>
    <ContactHeader />
    <ContactBusinessInfo />
    <ContactMaps />
    <ContactFormSection />
    <CtaSection subtitle={'contacto'} text={'¿Prefieres que hablemos ahora?'} description={'Te atendemos por WhatsApp en horario de centro.'} />
    </>
  )
}

export default Contacto
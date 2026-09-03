import React from 'react'
import ServicesHeader from './organism/ServicesHeader'
import ServicesTreatments from './organism/ServicesTreatments'
import CtaSection from '../components/organisms/CtaSection'

const Servicios = () => {
      return (
            <>
                  <ServicesHeader />
                  <ServicesTreatments />
                  <CtaSection subtitle={'cita previa'} text={'¿Tienes dudas sobre qué necesitas?'} description={'Escríbenos y te orientamos sin compromiso antes de reservar.'} />
            </>
      )
}

export default Servicios
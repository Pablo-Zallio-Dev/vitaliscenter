import React from 'react'
import AboutHeader from './organism/AboutHeader'
import AboutHistory from './organism/AboutHistory'
import AboutTeam from './organism/AboutTeam'
import AboutCenter from './organism/AboutCenter'
import CtaSection from '../components/organisms/CtaSection'

const Nosotros = () => {
  return (
      <>
      <AboutHeader />
      <AboutHistory />
      <AboutTeam />
      <AboutCenter />
      <CtaSection subtitle={'nosotros'} text={'Ven a conocernos'} description={'Reserva una primera valoración y te enseñamos el centro sin compromiso.'} />
      </>
  )
}

export default Nosotros
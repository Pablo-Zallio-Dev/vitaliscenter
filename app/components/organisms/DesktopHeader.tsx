import React from 'react'
import Logo from '../atoms/Logo'
import ContactInfo from '../molecules/ContactInfo'
import NavMenuDesktop from '../molecules/NavMenuDesktop'

const DesktopHeader = () => {
      return (
            <section className="hidden  lg:flex justify-center py-6 2xl:px-64 px-8 w-full bg-background border-b border-border-25/35 ">
            <section className=" grid grid-cols-3 justify-items-center w-full   ">
                  <Logo />
                  <NavMenuDesktop />
                  <ContactInfo />
            </section>
            </section>

      )
}

export default DesktopHeader
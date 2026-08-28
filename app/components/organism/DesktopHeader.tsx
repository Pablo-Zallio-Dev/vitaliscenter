import React from 'react'
import Logo from '../atoms/Logo'
import ContactInfo from '../molecules/ContactInfo'
import NavMenuDesktop from '../molecules/NavMenuDesktop'

const DesktopHeader = () => {
      return (
            <section className="hidden lg:fixed lg:flex justify-center py-6 px-8 w-full bg-background">
            <section className=" grid grid-cols-3 justify-items-center w-full   ">
                  <Logo />
                  <NavMenuDesktop />
                  <ContactInfo />
            </section>
            </section>

      )
}

export default DesktopHeader
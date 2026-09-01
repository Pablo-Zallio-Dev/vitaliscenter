'use client'
import { useMenuMobileStore } from "@/app/stores/store"
import ButtonPrimary from "../atoms/ButtonPrimary"
import ContactInfo from "../molecules/ContactInfo"
import MobileMenuHeader from "../molecules/MobileMenuHeader"
import NavMenuMobile from "../molecules/NavMenuMobile"

const MobileMenu = () => {

      const isActiveMenu = useMenuMobileStore( state => state.isActiveMenu )
  return (
    <section className={` fixed inset-0 z-100 lg:hidden w-full h-dvh transition-all duration-300 ease-in-out ${isActiveMenu ? ' bg-background-dark/20 pointer-events-auto' : 'pointer-events-none'} `}>
      <section className={` absolute z-100 ${isActiveMenu ?' translate-y-0 ' :'-translate-y-full'} flex flex-col w-full gap-6 pt-4 pb-8 px-5 bg-background rounded-b-4xl transition-transform duration-300 ease-in-out `}>
            <MobileMenuHeader />
            <NavMenuMobile />
            <ButtonPrimary text={"solicitar cita"} href={"/contacto"} />
            <ContactInfo />
      </section>
    </section>
  )   
}

export default MobileMenu


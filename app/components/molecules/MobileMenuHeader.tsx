import React from 'react'
import Logo from '../atoms/Logo'
import { IoCloseOutline } from 'react-icons/io5'
import { useMenuMobileStore } from '@/app/stores/store'

const MobileMenuHeader = () => {
            const setIsActiveMenu = useMenuMobileStore(state => state.setIsActiveMenu)
      
  return (
   <section className=" flex justify-between items-center w-full bg-transparent ">
      <Logo />
      <button onClick={setIsActiveMenu} className=" flex justify-center items-center w-10 h-10 border border-border/20 rounded-xl ">
            <IoCloseOutline size={22}  />
      </button>
   </section>
  )
}

export default MobileMenuHeader
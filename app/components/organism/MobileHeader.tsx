'use client'
import { BsList } from 'react-icons/bs'
import Logo from '../atoms/Logo'
import { useMenuMobileStore } from '@/app/stores/store'

const MobileHeader = () => {

      const setIsActiveMenu = useMenuMobileStore(state => state.setIsActiveMenu)
           const isActiveMenu = useMenuMobileStore( state => state.isActiveMenu )
console.log(isActiveMenu)

      return (
            <section className=" fixed z-100 lg:hidden top-0 flex items-center justify-between w-full py-4 px-5 bg-background ">
                  <Logo />
                  <button onClick={setIsActiveMenu} className=" flex justify-center items-center w-10 h-10 bg-cream border border-border/20 rounded-xl cursor-pointer ">
                        <BsList size={22} />
                  </button>
            </section>
      )
}

export default MobileHeader
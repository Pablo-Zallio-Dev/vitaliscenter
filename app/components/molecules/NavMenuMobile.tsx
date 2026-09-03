'use client'
import { usePathname } from 'next/navigation';
import LinkNavigation from '../atoms/LinkNavigation';


const NavMenuMobile = () => {

        const pathname = usePathname();


      const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Servicios', href: '/servicios' },
        { name: 'Nosotros', href: '/nosotros' },
        { name: 'Contacto', href: '/contacto' },
      ];


  return (
    <nav className='flex flex-col w-full ' >
      {
            navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return(

                        <LinkNavigation isActive={isActive} key={link.name} text={link.name} href={link.href} variant={'mobile'}  />
                  )

            })
      }
    </nav>
  )
}

export default NavMenuMobile
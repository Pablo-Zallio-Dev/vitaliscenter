'use client'
import { usePathname } from 'next/navigation';
import LinkNavigation from '../atoms/LinkNavigation';


const NavMenuDesktop = () => {

          const pathname = usePathname();

         const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Servicios', href: '/servicios' },
        { name: 'Nosotros', href: '/nosotros' },
        { name: 'Contacto', href: '/contacto' },
      ];
  return (
    <section className=" relative flex justify-center   ">
      <nav className=" absolute -bottom-12 flex gap-4 p-2 rounded-2xl border border-border-25/50 bg-background ">
             {
            navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return(

                        <LinkNavigation isActive={isActive} key={link.name} text={link.name} href={link.href} variant={'desktop'} desktop  />
                  )

            })
      }
      </nav>
    </section>
  )
}

export default NavMenuDesktop
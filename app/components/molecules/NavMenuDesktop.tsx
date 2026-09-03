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
            <section className="  flex justify-center   ">
                  <nav className=" fixed z-60 top-12 flex gap-4 p-2 rounded-2xl border border-border-25/20 bg-background shadow-lg/30 lg:hover:shadow-xl/40 lg:hover:-translate-y-1 lg:hover:scale-101 transition-all duration-300 ">
                        {
                              navLinks.map((link) => {
                                    const isActive = pathname === link.href;

                                    return (

                                          <LinkNavigation isActive={isActive} key={link.name} text={link.name} href={link.href} variant={'desktop'} desktop />
                                    )

                              })
                        }
                  </nav>
            </section>
      )
}

export default NavMenuDesktop
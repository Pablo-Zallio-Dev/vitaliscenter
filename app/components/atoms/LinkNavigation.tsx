import { useMenuMobileStore } from '@/app/stores/store'
import Link from 'next/link'

export type LinkNavigationVariants = 'mobile' | 'desktop'

const VariantLinkNavigation: Record<LinkNavigationVariants, string> = {
      mobile: ' w-full py-4 text-2xl font-crimsonText font-semibold  border-b border-border/10 ',
      desktop: 'py-2 px-5 font-catamaran  text-sm rounded-2xl hover:text-accent hover:bg-background-dark/5 transition-colors duration-200'
}

export type LinkNavigationProps = {
      text: string,
      href: string,
      variant: LinkNavigationVariants,
      isActive: boolean,
      desktop?: boolean
}

const LinkNavigation = ( {text, href, variant, isActive, desktop}:LinkNavigationProps ) => {
                  const setIsActiveMenu = useMenuMobileStore(state => state.setIsActiveMenu)
      
                  
  return (
    <Link onClick={() => (!desktop ? setIsActiveMenu() : '' )} href={href} className={` ${VariantLinkNavigation[variant]} capitalize ${ isActive && desktop ? 'text-accent bg-background-dark/5' : ''} ${ isActive ? 'text-accent' : ''} scroll-smooth `} > {text} </Link>
  )
}

export default LinkNavigation


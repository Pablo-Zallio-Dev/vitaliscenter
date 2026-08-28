import Link from 'next/link'

export type LinkNavigationVariants = 'mobile' | 'desktop'

const VariantLinkNavigation: Record<LinkNavigationVariants, string> = {
      mobile: ' w-full py-4 text-2xl font-crimsonText font-semibold  border-b border-border/10 ',
      desktop: 'py-2 px-5 font-catamaran  text-sm rounded-full hover:text-accent hover:bg-background-dark/5 transition-colors duration-200'
}

export type LinkNavigationProps = {
      text: string,
      href: string,
      variant: LinkNavigationVariants,
      isActive: boolean
}

const LinkNavigation = ( {text, href, variant, isActive}:LinkNavigationProps ) => {
      console.log(isActive)
  return (
    <Link href={href} className={` ${VariantLinkNavigation[variant]} capitalize ${ isActive ? 'text-accent' : ''} `} > {text} </Link>
  )
}

export default LinkNavigation


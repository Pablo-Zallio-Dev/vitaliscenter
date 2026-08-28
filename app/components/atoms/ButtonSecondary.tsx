import Link from 'next/link'

export type ButtonSecondaryVariant = 'light' | 'dark'

const VariantButtonSecondary: Record<ButtonSecondaryVariant, string> = {
      light: '  border-border-cream-35 text-cream lg:hover:bg-cream lg:hover:text-text ',
      dark: ' border-border-25 lg:hover:bg-background-dark lg:hover:text-cream '
}

export type ButtonSecondaryProps = {
      text: string,
      href: string,
      variant:ButtonSecondaryVariant
}

const ButtonSecondary = ( { text, href, variant}:ButtonSecondaryProps ) => {
  return (
    <Link href={href} className={ ` ${VariantButtonSecondary[variant]} py-4 px-8 border bg-transparent font-catamaran font-medium tracking-widest  text-sm uppercase  transition-colors duration-200 ` }  >
      {text}
    </Link>
  )
}

export default ButtonSecondary
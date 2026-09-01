import Link from 'next/link'

export type ButtonSecondaryVariant = 'light' | 'dark'

const VariantButtonSecondary: Record<ButtonSecondaryVariant, string> = {
      light: ' inline-flex  border-border-cream-35 text-cream lg:hover:bg-cream lg:hover:text-text ',
      dark: ' inline-flex border-border-25 lg:hover:bg-background-dark lg:hover:text-cream '
}

export type ButtonSecondaryProps = {
      text: string,
      href: string,
      variant:ButtonSecondaryVariant,
      full?: boolean
}

const ButtonSecondary = ( { text, href, variant, full}:ButtonSecondaryProps ) => {
  return (
    <Link href={href} className={ ` ${full ?'w-full justify-start' : ' justify-center ' } ${VariantButtonSecondary[variant]} py-4 px-8 border bg-transparent font-catamaran font-medium tracking-widest  text-sm uppercase  transition-colors duration-200 ` }  >
      {text}
    </Link>
  )
}

export default ButtonSecondary
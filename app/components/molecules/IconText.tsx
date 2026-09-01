import Link from 'next/link';
import React from 'react'
import Icon from '../atoms/Icon'
import { IconType } from 'react-icons';


interface IconTextProps {
  icon: IconType;
  text: string,
  textDescription?: string
  href: string; // Opcional si es cliqueable (ej. teléfono o email)
  className?: string;
}

const IconText = ( {icon, text, textDescription, href, className }: IconTextProps ) => {
    
  return (
    <Link href={href} className={` flex  gap-2 text-cream text-sm ${className} `}>
      <Icon icon={icon} />
      <div className="">
      {text}
      <p className=" text-cream/50 ">{textDescription}</p>
      </div>
    </Link>
  )
}

export default IconText
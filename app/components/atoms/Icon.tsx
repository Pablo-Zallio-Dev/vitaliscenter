import { IconType } from "react-icons"

const Icon = ( {icon: Icon}: {icon: IconType} ) => {
  return (
    <div className={` text-accent `}>
      <Icon size={17} />

    </div>
  )
}

export default Icon
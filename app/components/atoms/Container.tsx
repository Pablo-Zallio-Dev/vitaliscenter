import React from 'react'

const Container = ( {children, className, id}: {children: React.ReactNode, className?: string, id?:string} ) => {
      return (
            <div id={id} className={` flex justify-center px-5 md:px-10 overflow-hidden ${className} `}>
                  <div className=" w-full max-w-336 ">
                        {children}
                  </div>
            </div>
      )
}

export default Container
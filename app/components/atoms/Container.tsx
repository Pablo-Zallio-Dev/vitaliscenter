import React from 'react'

const Container = ( {children, className}: {children: React.ReactNode, className?: string} ) => {
      return (
            <div className={` flex justify-center px-5 md:px-10  ${className} `}>
                  <div className=" w-full max-w-336 ">
                        {children}
                  </div>
            </div>
      )
}

export default Container
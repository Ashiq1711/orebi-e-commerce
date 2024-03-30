import React from 'react'

function Flex({children,className,onClick,dref}) {
  return (
    <div ref={dref} onClick={onClick}  className= {`flex justify-between items-center ${className}`}>{children}</div>
  )
}

export default Flex
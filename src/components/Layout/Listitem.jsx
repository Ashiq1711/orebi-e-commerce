import React from 'react'

function Listitem({children,className, onClick}) {
  return (
    <li onClick={onClick} className={className}>{children}</li>
  )
}

export default Listitem
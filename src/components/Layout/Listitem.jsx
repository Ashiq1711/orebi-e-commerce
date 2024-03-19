import React from 'react'

function Listitem({children,className}) {
  return (
    <li className={className}>{children}</li>
  )
}

export default Listitem
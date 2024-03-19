import React, { Children } from 'react'

function Container({children}) {
  return (
    <div className='max-w-container mx-auto'>{children}</div>
  )
}

export default Container
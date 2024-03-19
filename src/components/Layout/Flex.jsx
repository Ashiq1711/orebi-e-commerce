import React from 'react'

function Flex({children}) {
  return (
    <div className=' md:px-10 py-4 px-7 md:flex justify-between items-center '>{children}</div>
  )
}

export default Flex
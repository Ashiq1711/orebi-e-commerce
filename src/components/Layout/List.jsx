import React, { Children } from 'react'

function List({children,className,dref}) {
  return (
    <div>

      <ul ref={dref} className={className}>{children}</ul>
    </div>
  )
}

export default List
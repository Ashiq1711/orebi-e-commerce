import React, { Children } from 'react'

function List({children,className}) {
  return (
    <div>

      <ul className={className}>{children}</ul>
    </div>
  )
}

export default List
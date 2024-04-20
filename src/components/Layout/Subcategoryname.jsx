import React from 'react'
import List from './List'
import Listitem from './Listitem'

function Subcategoryname({subname}) {
  return (
    <div>
<List className=' py-5'>
  <Listitem className=' text-color_3'>
{subname}
  </Listitem>
</List>
    </div>
  )
}

export default Subcategoryname
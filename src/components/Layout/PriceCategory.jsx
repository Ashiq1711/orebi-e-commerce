import React from 'react'
import List from './List'
import Listitem from './Listitem'

function PriceCategory({price}) {

  return (
    <div>
      <List className='border-b'>
        <Listitem className='py-5  '>
   {price}
        </Listitem>
      </List>
    </div>
  )
}

export default PriceCategory
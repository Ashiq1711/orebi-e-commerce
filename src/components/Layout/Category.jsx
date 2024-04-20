import React from 'react'
import Accordion from './Accordion '

function Category() {
  return (
    <div className=''>
        <Accordion categoryname='Category 1' subcategoryname='Subcategory One' subcategory={true}/>
        <Accordion categoryname='Category 1' subcategoryname='Subcategory One' subcategory={false}/>
        <Accordion categoryname='Category 1' subcategoryname='Subcategory One' subcategory={true}/>
     
    </div>
  )
}

export default Category
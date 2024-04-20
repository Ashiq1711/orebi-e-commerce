import React from "react";
import List from './List';
import Listitem from './Listitem';
function BrandCategory({brandname}) {
  return (
    <div>
   
      <List className='border-b py-5'>
        <Listitem className=' text-color_3'>{brandname}</Listitem>
      </List>
    </div>
  );
}

export default BrandCategory;

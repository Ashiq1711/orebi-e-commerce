import React from 'react'
import List from './List'
import Listitem from './Listitem'

function ColorCategory({colorcode,colorname}) {
    console.log(colorcode)
  return (
    <div>
         <List>
            <div className=" flex items-center gap-3 border-b py-5">
<div style={{background:`${colorcode}`}}
 className={` w-[11px] h-[11px]  rounded-full`}></div>
          <Listitem className=" text-color_3">{colorname}</Listitem>           
            </div>
        </List>
    </div>
  )
}

export default ColorCategory
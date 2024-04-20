import React, { useState } from "react";
import Subcategoryname from "./Subcategoryname";

function Accordion({categoryname, subcategoryname,subcategory}) {
  let [accordionOpen, setAccordionOpen] = useState(false);
  return ( 
    <div className="  border-b py-5">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className=" flex justify-between items-center w-full"
      >
        <span className=" font-semibold text-color_2">{categoryname}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        {subcategory &&
        <svg
          className="  shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
        }
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-200 ease-in-out text-sm ${
          accordionOpen
            ? " grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        {subcategory &&
        <div className=" overflow-hidden ml-5 ">
          <Subcategoryname subname='Category one'/>
          <Subcategoryname subname='Category two'/>
          <Subcategoryname subname='Category three'/>
        </div>
        }
      </div>
    </div>
  );
}

export default Accordion;

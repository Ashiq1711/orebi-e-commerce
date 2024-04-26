import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Products from './Products';

function Pagination({itemsPerPage, dummyProducts}) {
    const items = dummyProducts

function Items({ currentItems }) {
  return (
    <div className=' flex flex-wrap gap-6'>
      {currentItems &&
        currentItems.map((item) => (
          <div>
             <Products pInfo={item} pimage={item.thumbnail} isnew={true} />
          </div>
        ))}
    </div>
  );
}

    const [itemOffset, setItemOffset] = useState(0);
  
    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
 
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  return (
    <div> <Items currentItems={currentItems} />
<div className=' flex-wrap md:flex-nowrap px-3 md:px-0 flex items-center justify-between'>

    <ReactPaginate
      breakLabel="..."
      nextLabel=""
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel=""
      renderOnZeroPageCount={null}
      containerClassName='flex gap-4 ml-[-15px] mt-10'
     
      activeClassName='bg-black text-white'
      pageLinkClassName='px-4 py-2 border inline-block'
      />
      <p className=' mt-3 md:mt-0'>{itemOffset +1} to {endOffset > items.length ? items.length : endOffset} of {items.length}</p>
      </div>
</div>
  )
}

export default Pagination

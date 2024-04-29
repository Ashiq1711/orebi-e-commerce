import React from 'react'
import Container from '../components/Layout/Container'
function Error_page() {
  return (
    <Container>
        <div className=' px-3 lg:px-0'>
            <h1 className=' font-bold text-[50px] md:text-[200px] mt-[80px]'>404</h1>
            <p className=' pb-10 md:pb-[200px] text-base tracking-wider w-full md:w-[644px] text-color_2'>The page you were looking for couldn't be found. The page could be removed
                 or you misspelled the word while searching for it. Maybe try a search?</p>
        </div>
    </Container>
  )
}

export default Error_page
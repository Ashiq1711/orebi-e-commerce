import React from "react";
import Title from "./Title";
import Container from "./Container";
import Flex from "./Flex";
import Products from "./Products";

function OurBestsellers() {
  return (
    <section className=" mt-10 md:mt-[108px]">
      <Container>
        <Title
          title="Our Bestsellers"
        />
        <Flex className=' flex-wrap md:flex-nowrap w-full '>
          <Products pimage="public/images/p1.png" isnew={true} />
          <Products pimage="public/images/p1.png" isnew={true} />
          <Products pimage="public/images/p1.png" isnew={true} />
          <Products pimage="public/images/p1.png" isnew={true} />
        </Flex>
      </Container>
    </section>
  );
}

export default OurBestsellers;

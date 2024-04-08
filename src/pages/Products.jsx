import React from "react";
import Container from "../components/Layout/Container";
import Breadcrumb from "../components/Layout/Breadcrumb";
import Flex from "../components/Layout/Flex";
import ShopbyCategory from "../components/Layout/ShopbyCategory";

function Products() {
  return (
    <Container>
      <Breadcrumb />
      <div className="mt-[130px] flex gap-10">
        <div className=" w-[20%]  ">
          <ShopbyCategory />
        </div>
        <div className=" w-[80%] h-[200px] bg-red-400"></div>
      </div>
    </Container>
  );
}

export default Products;

import React, { useEffect, useState } from "react";
import Container from "../components/Layout/Container";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const CartPage = () => {
  const [allCartProduct, setallCartProduct] = useState([]);
  let userData = useSelector((state) => state.userinfo.value);
  useEffect(() => {
    async function getAllcart() {
      axios
        .get(`http://localhost:3000/api/v1/cart/getcart/${userData._id}`)
        .then((data) => {
          setallCartProduct(data.data.getAllcartProduct);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getAllcart();
  }, [allCartProduct]);
  let totalPrice = allCartProduct.reduce(
    (prev, curr) => curr.productid.sellingprice * curr.quantity + prev,
    0
  );
  let handle_incriment = (pid) => {
    
    console.log(`http://localhost:3000/api/v1/cart/quantityupdate/${pid._id}?quantityinc=inc`)
    axios
      .post(
        `http://localhost:3000/api/v1/cart/quantityupdate/${pid._id}?quantityinc=inc`
      )
      .data((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <div class="font-[sans-serif] bg-gradient-to-tr from-gray-200 via-gray-100 to-gray-50">
        <div class="max-w-7xl max-lg:max-w-4xl mx-auto p-6">
          <h2 class="text-2xl font-extrabold text-gray-800">
            Your shopping cart
          </h2>

          <div class="grid lg:grid-cols-3 gap-4 relative mt-8">
            <div class="lg:col-span-2 space-y-4">
              {allCartProduct.map((item) => (
                <div class="p-6 bg-white shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] rounded-md relative">
                  <div class="flex items-center max-sm:flex-col gap-4 max-sm:gap-6">
                    <div class="w-52 shrink-0">
                      <img
                        src={item.productid.image}
                        class="w-full h-full object-contain"
                      />
                    </div>

                    <div class="sm:border-l sm:pl-4 sm:border-gray-300 w-full">
                      <h3 class="text-xl font-bold text-gray-800">
                        {item.productid.name}
                      </h3>

                      <ul class="mt-4 text-sm text-gray-800 space-y-2">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.productid.description,
                          }}
                        ></div>

                        <li>
                          <a href="javascript:void(0);" class="text-blue-600">
                            (See more Specifications)
                          </a>
                        </li>
                      </ul>

                      <hr class="border-gray-300 my-4" />

                      <div class="flex items-center justify-between flex-wrap gap-4">
                        <div class="flex items-center gap-3">
                          <h4 class="text-sm font-bold text-gray-800">Qty:</h4>
                          <button
                            type="button"
                            class="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-2 fill-white"
                              viewBox="0 0 124 124"
                            >
                              <path
                                d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                data-original="#000000"
                              ></path>
                            </svg>
                          </button>
                          <span class="font-bold text-sm leading-[16px]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handle_incriment(item.productid)}
                            type="button"
                            class="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-2 fill-white"
                              viewBox="0 0 42 42"
                            >
                              <path
                                d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                data-original="#000000"
                              ></path>
                            </svg>
                          </button>
                        </div>

                        <div class="flex items-center">
                          <h4 class="text-lg font-bold text-gray-800">
                            ৳ {`${item.productid.sellingprice}`} Taka
                          </h4>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-3 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 absolute top-3.5 right-3.5"
                            viewBox="0 0 320.591 320.591"
                          >
                            <path
                              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                              data-original="#000000"
                            ></path>
                            <path
                              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                              data-original="#000000"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div class="bg-white h-max rounded-md p-6 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] sticky top-0">
              <h3 class="text-xl font-bold text-gray-800">Order Summary</h3>

              <ul class="text-gray-800 text-sm divide-y mt-4">
                <li class="flex flex-wrap gap-4 py-3">
                  Subtotal{" "}
                  <span class="ml-auto font-bold">{totalPrice} tk</span>
                </li>
                <li class="flex flex-wrap gap-4 py-3">
                  Shipping <span class="ml-auto font-bold">00 tk</span>
                </li>
                <li class="flex flex-wrap gap-4 py-3">
                  Tax <span class="ml-auto font-bold">00 tk</span>
                </li>
                <li class="flex flex-wrap gap-4 py-3 font-bold">
                  Total <span class="ml-auto">{totalPrice} Taka</span>
                </li>
              </ul>

              <Link to='/checkout' 
              state={{ totalPrice: totalPrice }}
                type="button"
                class="mt-4 text-sm text-center px-6 py-3 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md"
              >
                Make Payment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;

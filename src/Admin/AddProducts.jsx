import React, { createRef, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { useSelector } from "react-redux";
function AddProducts() {
  let data = useSelector((state) => state.userinfo.value);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sellingprice, setSellingprice] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [store, setStore] = useState("");
  const [allcategory, setAllcategory] = useState([]);
  const [allstore, setAllstore] = useState([]);

  let handle_submit = () => {
    let formData = new FormData();
    formData.append("name", title);
    formData.append("description", description);
    formData.append("image", imageurl);
    formData.append("price", price);
    formData.append("sellingprice", sellingprice);
    formData.append("store", store);
    formData.append("category", category);
    formData.append("ownerid", data._id);
    axios
      .post("http://localhost:3000/api/v1/product/createproduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
      toast.success('Successfully toasted!')
  };
  useEffect(() => {
    function getCategory() {
      axios
        .get("http://localhost:3000/api/v1/category/getallcategory")
        .then((data) => {
          setAllcategory(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getCategory();
    function getStore() {
      axios
        .get("http://localhost:3000/api/v1/store/getallstore")
        .then((data) => {
          setAllstore(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getStore();
  }, []);
  return (
    <div class="p-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div class="flex gap-3 w-[1800px]">
        <div class="w-2/3 p-5 bg-white rounded-3xl">
          <h1 className="mb-5 text-3xl font-bold">Product Description</h1>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
          />
          <div className="mt-10">
            <p className=" font-bold">Product Name</p>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className=" border w-96 h-10 px-3 rounded-md"
              placeholder="Input title here..."
              type="text"
            />
          </div>
          <div className="mt-10">
            <p className=" font-bold">Product Category</p>
            <form class="max-w-sm ">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                onChange={(e) => setCategory(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a category</option>
                {allcategory.map((item, index) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <div className="mt-10">
            <p className=" font-bold">Product store</p>
            <form class="max-w-sm ">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select
                onChange={(e) => setStore(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a store</option>
                {allstore.map((item, index) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>

          <div>
            <div class="flex mt-10">
              <div class="w-1/2  ">
                <p className=" font-bold">Selling price</p>
                <input
                  onChange={(e) => setSellingprice(e.target.value)}
                  className=" border w-96 h-10 px-3 rounded-md"
                  placeholder="USD"
                  type="number"
                />
              </div>
              <div class="w-1/2 ">
                <p className=" font-bold">Price</p>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  className=" border w-96 h-10 px-3 rounded-md"
                  placeholder="USD"
                  type="number"
                />
              </div>
            </div>
            <div className="mt-10">
              <div>
                <h1>Image upload</h1>

                <div>
                  <input
                    onChange={(e) => setImageurl(e.target.files[0])}
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer"
                    id="multiple_files"
                    type="file"
                    multiple
                  />

                  <img src={imageurl && URL.createObjectURL(imageurl)} alt="" />
                </div>
              </div>
            </div>
            <div className="mt-10 text-center">
              <button onClick={handle_submit} className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;

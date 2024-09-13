import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
function AddCategory() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  let handle_submit = () => {
    axios
      .post("http://localhost:3000/api/v1/category/createcategory", {
        name,
        description,
      })
      .then((data) => {
        if (data.data.success) {
          toast.success(data.data.success);
        } else {
          toast.error(data.data.error);
        }
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-white h-[500px] p-4 m-4 rounded-lg">

    <div className="p-12 ">
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <h1 className="font-bold text-2xl">Add Category </h1>
      </div>
      <div>
        <p className="mt-5">Category name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Type here"
          className=" w-80 input input-bordered  max-w-xs"
        />
      </div>
      <div className="py-5">
        <p>Category discription</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="border p-3"
          placeholder="Category discription"
          rows="4"
          cols="50"
          name="comment"
          form="usrform"
        ></textarea>
      </div>
      <button onClick={handle_submit} className="btn btn-primary">
        Submit
      </button>
    </div>
    </div>
  );
}

export default AddCategory;

import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Router,
} from "react-router-dom";
import Rootlayout from "./components/Layout/Rootlayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Jurnal from "./pages/Jurnal";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductsDetails from "./components/Layout/ProductsDetails";
import AdminLayout from "./Admin/AdminLayout";
import AdminLogin from "./Admin/AdminLogin";
import Admin from "./Admin/Admin";
import Forgetpassword from "./components/Layout/Forgetpassword";
import Changepassword from "./pages/Changepassword";
import Alluser from "./Admin/Alluser";
import UpdateUser from "./Admin/UpdateUser";
import AllProducts from "./Admin/AllProducts";
import AddProducts from "./Admin/AddProducts";
import UpdateProducts from "./Admin/UpdateProducts";
import AllCategory from "./Admin/AllCategory";
import AddCategory from "./Admin/AddCategory";
import UpdateCategory from "./Admin/UpdateCategory";
import ErrorPage from "./components/Layout/ErrorPage";
import CartPage from "./pages/CartPage";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/products" element={<Product/>}></Route>
      <Route path="/productdetail/:id" element={<ProductsDetails/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/jurnal" element={<Jurnal/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/forgetpassword" element={<Forgetpassword/>}></Route>
      <Route path="/changepassword/:token" element={<Changepassword/>}></Route>
      <Route path="/changepassword/:token" element={<Changepassword/>}></Route>
      <Route path="/addtocart" element={<CartPage/>}></Route>
    </Route>


    <Route path="admin/login" element={<AdminLogin/>}/>
    <Route path="/admin" element={<AdminLayout/>}>
    <Route index element={<Admin/>}/>
    <Route path="alluser" element={<Alluser/>}/>
    <Route path="updateuser" element={<UpdateUser/>}/>
    <Route path="allproducts" element={<AllProducts/>}/>
    <Route path="addproducts" element={<AddProducts/>}/>
    <Route path="updateproducts" element={<UpdateProducts/>}/>
    <Route path="allcategory" element={<AllCategory/>}/>
    <Route path="addcategory" element={<AddCategory/>}/>
    <Route path="updatecategory" element={<UpdateCategory/>}/>

    </Route>
    <Route path="*" element={<ErrorPage/>}/>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayout from "./components/Layout/Rootlayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/products" element={<Products/>}></Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

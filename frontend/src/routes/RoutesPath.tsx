import { Routes, Route } from "react-router-dom";
import { Loader } from "../container/loader/Loader";
import { lazy, Suspense, useState } from "react";
import { Toaster } from "react-hot-toast";
import BasicCard from "../components/card/Card";
import ProductDetialsContainer from "../container/products/ProductDetailsContainer";
import OrderContainer from "../container/order/OrderContainer";
import About from "../container/about/About";
import Contactus from "../container/contact/Contactus";
import ProductsContainer from "../container/products/ProductsContainer";
import Home from "../container/home/Home";

// const Home = lazy(() => import("../container/home/Home"));
// const Products = lazy(() => import("../container/products/ProductsContainer"));

export const RoutesPath = () => {
  // const [loading, setLoading] = useState(false);
  return (
    // loading ? (
    //   <Loader />
    // ) : 
    // <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/products" element={<ProductsContainer />} />
        {/* <Route path="/products/:productId" element={<ProductsContainer />} /> */}
        <Route path="/order" element={<OrderContainer />} />
        <Route path="/card" element={<BasicCard />} />
      </Routes>
    // </Suspense>
    // <Toaster position = "bottom-center" />
  );
};

import { useState } from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import Header from "./pages/Components/Header";
import Footer from "./pages/Components/Footer";
import About from "./pages/Components/About/About";
import OurProject from "./pages/Components/OurProduct/OurProject";
import Booknow from "./pages/Components/Booknow";
import Blog from "./pages/Components/Blog/Blog";
import Stats from "./pages/Components/Stats/Stats";
import Ourvision from "./pages/Components/Ourvision/Ourvision";
import Ourservice from "./pages/Components/OurService/Ourservice";
import SingleProduct from "./pages/Components/Product/SingleProduct";
import ProductList from "./pages/Components/Product/ProductList";
import { Cart } from "./pages/Components/Product/Cart";
import { SignUp } from "./pages/Components/Auth/SignUp";
import { SignIn } from "./pages/Components/Auth/SignIn";
import Reset from "./pages/Components/Auth/Reset";
import Otpvarfication from "./pages/Components/Auth/Otpvarfication";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourProduct" element={<OurProject />} />
        <Route path="/singleproduct" element={<SingleProduct />} />
        <Route path="booknow" element={<Booknow />} />
        <Route path="blog" element={<Blog />} />
        <Route path="stats" element={<Stats />} />
        <Route path="ourvision" element={<Ourvision />} />
        <Route path="ourservice" element={<Ourservice />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="cart" element={<Cart />} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="login" element={<SignIn/>} />
        <Route path="reset" element={<Reset/>} />
        <Route path="otp" element={<Otpvarfication/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

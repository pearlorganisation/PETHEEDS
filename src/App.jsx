import { useState } from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import Header from "./pages/Components/Header";
import Footer from "./pages/Components/Footer";
import About from "./pages/Components/About/About";
import OurProject from "./pages/Components/OurProduct/OurProject";
import Booknow from "./pages/Components/Booknow";
import Blog from "./pages/Components/Blog/Blog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourProduct" element={<OurProject/>} />
        <Route path="booknow" element={<Booknow/>}/>
        <Route path="blog" element={<Blog/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

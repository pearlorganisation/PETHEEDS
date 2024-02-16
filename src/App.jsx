import { useState } from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import Header from "./pages/Components/Header";
import Footer from "./pages/Components/Footer";
import About from "./pages/Components/About/About";
import OurProject from "./pages/Components/OurProduct/OurProject";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourProduct" element={<OurProject/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

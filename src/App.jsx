import { useState } from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" h-dvh bg-red-400">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FoundPage from "./pages/FoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<FoundPage />} />
    </Routes>
  );
}

export default App;

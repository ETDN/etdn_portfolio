import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import "./fonts/ARAME-REGULAR.TTF";
import Home from "./Components/Home";
import Nav from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/navbar" element={<Nav />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import Header from "./components/Navbar/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./assets/css/index.css";

import HomePage from "./pages/Home";


const App = () => {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

    </Router>
  );
};

export default App;

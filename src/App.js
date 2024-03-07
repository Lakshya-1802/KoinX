import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./assets/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/Home";
import "./App.css";

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

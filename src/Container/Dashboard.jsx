import React from "react";
import Login from "./LoginContainer/Login";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import Footer from "../Components/Footer/Footer";
import AddDocuments from "../Components/AddDocuments/AddDocuments";
import { Routes, Route } from "react-router-dom";
import About from "../Components/About/About";
const Dashboard = () => {
  return (
    <div>
      {/* <Login /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/document" element={<AddDocuments />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Dashboard;

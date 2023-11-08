import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Dashboard from "./Container/Dashboard";
import { Routes, Route } from "react-router-dom";
import Login from "./Container/LoginContainer/Login";
import React, { useState, useEffect } from "react";
import Loader from "./Components/Loader/Loader";
import { auth } from "./firebase";
import SignUp from "./Container/SignUpContainer/SignUp";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      setLoading(false); // Set loading to false after handling auth state.
    });

    return () => unSubscribe();
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> // Display a loader while loading.
      ) : loggedIn ? (
        <Dashboard />
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      )}
    </>
  );
}

export default App;

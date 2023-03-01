import NavBar from "./components/Navbar";
import Student from "./components/Student";
import Teachers from "./components/Teacher";
import Courses from "./components/Courses";
import Home from "./components/Home";
import Login from "./components/Login";
import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />

        <Route path="/students" element={<Student />} />

        <Route path="/teachers" element={<Teachers />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

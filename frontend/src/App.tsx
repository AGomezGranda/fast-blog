import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./app/Login";
import LandingPage from "./app/LandingPage";
import Register from "./app/Register";
import Posts from "./app/Posts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Route to posts the user should be authenticated */}
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;

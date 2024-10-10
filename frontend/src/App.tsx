import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./app/Login";
import LandingPage from "./app/LandingPage";
import Register from "./app/Register";
import Posts from "./app/Posts";
import CreatePost from "./app/CreatePost";
import ViewPost from "./app/ViewPost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Route to posts the user should be authenticated */}
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/create" element={<CreatePost onPostCreated={function (): void {
        throw new Error("Function not implemented.");
      } }/>}></Route>

      <Route path="/posts/:uuid" element={<ViewPost />} />
    </Routes>
  );
}

export default App;

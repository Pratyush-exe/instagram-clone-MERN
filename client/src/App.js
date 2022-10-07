import React from "react";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Post from "./Components/Posts/Post/Post";
import PostsMain from "./Components/Posts/PostsMain";
import SignUp from './Components/SignUp/SignUp'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Components/Home/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/posts" element={<PostsMain />} /> */}
          <Route path="/posts" element={<ProtectedRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

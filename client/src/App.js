import React from "react";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Post from "./Components/Posts/Post/Post";
import PostsMain from "./Components/Posts/PostsMain";
import SignUp from './Components/SignUp/SignUp'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

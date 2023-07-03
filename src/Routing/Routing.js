import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import NewBlogs from "../Components/NewBlogs";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<NewBlogs />} />
      </Routes>
    </>
  );
}

export default Routing;

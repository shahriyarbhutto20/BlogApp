import React, { useState } from "react";

function Home() {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem",
      autor: "Ali",
      id: 1,
    },
    {
      title: "Welcome Party",
      body: "lorem",
      autor: "Haider",
      id: 2,
    },
    {
      title: "Web Dev Top Tips",
      body: "lorem",
      autor: "Umer",
      id: 3,
    },
  ]);

  return (
    <div className="Homepage">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.autor}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;

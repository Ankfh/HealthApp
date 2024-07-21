// src/components/Blog.js
import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/blogData";

const Blog = () => {
  return (
    <div className="flex flex-col items-center w-full bg-gray-100 p-5 sm:p-10 md:p-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 uppercase text-orange-600 p-8 text-center">
        Our latest blog
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full max-w-6xl">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg p-5">
            <img
              src={post.image}
              alt={post.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="text-xl sm:text-2xl font-bold mt-5">{post.name}</h2>
            <p className="text-gray-700 mt-3">
              {post.summary}
              <Link
                to={`/blogdetail/${post.id}`}
                className="text-gray-700 hover:underline hover:text-black mt-3 block"
              >
                Read more
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

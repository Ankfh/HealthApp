// src/components/PostDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../../Blog/data/blogData";
import FooterUi from "../../shared/Footer/UI/FooterUi";

const BlogDetailView = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <div className="flex flex-col items-center w-full  bg-gray-100 p-5">
        <Link to="/" className="text-blue-500 hover:underline mb-5">
          Back to Blog
        </Link>
        <div className="bg-white rounded-lg shadow-lg p-5 w-full max-w-2xl">
          <img
            src={post.image}
            alt={post.name}
            className="w-full h-60 object-cover rounded-t-lg"
          />
          <h2 className="text-4xl font-bold mt-5">{post.name}</h2>
          <p className="text-gray-700 mt-5">{post.content}</p>
        </div>
      </div>
      <FooterUi />
    </>
  );
};

export default BlogDetailView;

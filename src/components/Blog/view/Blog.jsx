// src/components/Blog.js
import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/blogData";
import FooterUi from "../../shared/Footer/UI/FooterUi";
import BlogList from "../view/BlogList";

const Blog = () => {
  return (
    <div>
      <BlogList />
      <FooterUi />
    </div>
  );
};

export default Blog;

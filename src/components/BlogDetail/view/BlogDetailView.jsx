import React from "react";
import { useParams } from "react-router-dom";
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
      <div className="flex flex-col items-center bg-white">
        <div className="bg-white w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 m-4 pt-20">
          <img
            src={post.image}
            alt={post.name}
            className="w-full h-auto max-h-[500px] object-cover mb-6"
          />
          <div className="p-4 sm:p-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              {post.name}
            </h2>
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-base sm:text-lg md:text-xl text-black leading-relaxed text-justify mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      <FooterUi />
    </>
  );
};

export default BlogDetailView;

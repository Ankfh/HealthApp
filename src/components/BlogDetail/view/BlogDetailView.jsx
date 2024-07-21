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
        <div className="bg-white w-full md:w-3/4 lg:w-3/3 xl:w-2/2 m-4 pt-20">
          <img
            src={post.image}
            alt={post.name}
            className="w-full h-96 object-cover mb-6"
          />
          <div className="p-6">
            <h2 className="text-4xl font-bold text-black mb-4 ">{post.name}</h2>
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className={`text-black leading-relaxed text-justify p-4 paragraph-${index}`}
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

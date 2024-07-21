import React, { useEffect } from "react";
import BlogDetailView from "../view/BlogDetailView";
import { useParams } from "react-router-dom";
import { useGlobalState } from "../../Global/context/GlobalStateProvider";

const BlogContianer = () => {
  const { id } = useParams();
  const { setselectedTab, selectedTab } = useGlobalState();
  useEffect(() => {
    setselectedTab("BLOG");
  }, []);
  return (
    <>
      <BlogDetailView />
    </>
  );
};

export default BlogContianer;

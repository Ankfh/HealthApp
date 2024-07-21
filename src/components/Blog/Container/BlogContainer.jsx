import React, { useEffect } from "react";
import Blog from "../view/Blog";
import { useGlobalState } from "../../Global/context/GlobalStateProvider";

const BlogContainer = () => {
  const { setselectedTab, selectedTab } = useGlobalState();
  useEffect(() => {
    setselectedTab("BLOG");
  }, []);
  return (
    <>
      <Blog />
    </>
  );
};

export default BlogContainer;

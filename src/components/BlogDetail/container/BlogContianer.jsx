import React from 'react'
import BlogDetailView from '../view/BlogDetailView'
import { useParams } from 'react-router-dom';

const BlogContianer = () => {
    const { id } = useParams();
  return (
    <>
      <BlogDetailView/>
    </>
  )
}

export default BlogContianer

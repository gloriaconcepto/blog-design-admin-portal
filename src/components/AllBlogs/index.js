import React, { useEffect, useState } from "react";
import BLOG_DATA from "./blogsData";
import ViewCampaigns from "./ViewCampaigns";
const AllBlogs = () => {
  const [blogs, getAllBlog] = useState([]);
  useEffect(() => {
    getAllBlog(BLOG_DATA);

    return () => {
      getAllBlog(BLOG_DATA);
    };
  }, [blogs]);
  return (
    <div>
      {blogs.map(({ id, ...otherBlogs }) => (
        <ViewCampaigns key={id} {...otherBlogs} />
      ))}
    </div>
  );
};

export default AllBlogs;

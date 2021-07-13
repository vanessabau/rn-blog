import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    // Create a new array, take all the existing blog posts we ave and add them into the new array, then add the new blog post we want to add
    setBlogPosts([
      ...blogPosts,
      {
        title: `Blog Post # ${
          blogPosts.length + 1
        }`,
      },
    ]);
  };
  return (
    <BlogContext.Provider
      value={{ data: blogPosts, addBlogPost }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;

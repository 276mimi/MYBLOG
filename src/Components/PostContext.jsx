import React, { createContext, useState, useEffect } from 'react';

export const PostContext = createContext();

export function PostProvider({ children }) {
    const [posts, setPosts] = useState(() => {
        const savedPosts = localStorage.getItem('posts');
        return savedPosts ? JSON.parse(savedPosts) : [];
    });

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
      }, [posts]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
}

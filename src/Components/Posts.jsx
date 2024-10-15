import React, { useContext } from 'react';
import PostItem from '../Components/PostItem';
import { PostContext } from './PostContext'; 

export default function Posts() {
  const { posts } = useContext(PostContext);

  return (
    <section className='posts'>
      {posts.length > 0 ? (
        <div className='container posts-container'>
          {posts.map(({ id, image, category, title, description, authorID }) => (
            <PostItem
              key={id}
              postImg={image ? URL.createObjectURL(image) : null} 
              category={category}
              title={title}
              content={description}
              authorID={authorID}
              postID={id}
            />
          ))}
        </div>
      ) : (
        <h1 className='center'>No Posts Found</h1>
      )}
    </section>
  );
}

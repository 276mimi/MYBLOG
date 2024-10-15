import React, { useState } from 'react'
import { Dummy_Posts } from '../Components/Data'
import PostItem from '../Components/PostItem'

export default function CategoryPosts() {
  const [posts, setPosts] = useState(Dummy_Posts)

  return (
    <div>
      <section className='category-posts'>
        {posts.length > 0 ? <div className='container category-post-container'>
          { posts.map(({id, postImg, category, title, content, authorID}) => <PostItem key={id} postImg={postImg} category={category} title={title} content={content} authorID={authorID} postID={id} />)}
        </div> : <h1 className='center'>No Posts Found</h1>}
      
       </section>
    </div>
  )
}

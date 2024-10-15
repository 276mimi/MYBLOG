import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

export default function PostItem({postID, title, content, authorID, postImg, category }) {

    const shortDescription = content.length > 145 ? content.substr(0, 145) + '...' : content;
    const postTitle = title.length > 30 ? title.substr(0, 30) + '...' : title;

  return (
    <article className='post'>
        <div className="post-img">
        {postImg && <img src={postImg} alt={title} />} 
        </div>
        <div className="post-content">
            <Link to={`./post/${postID}`}>
                <h3>{postTitle}</h3>
            </Link>
             <div dangerouslySetInnerHTML={{ __html: shortDescription }} />
            <div className="post-footer">
                <PostAuthor />
                <Link to={`/posts/categories/${category}`} className='btn-category'>{category}</Link>
            </div>
        </div>

       
    </article>
  )
}

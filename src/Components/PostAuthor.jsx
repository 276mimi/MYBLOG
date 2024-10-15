import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../images/icon2.png'

export default function PostAuthor() {
  return (
   <Link to={`/posts/users/sdfsdf`} className='post-author'>
        <div className="post-author-avatar">
            <img src={avatar} alt="" />
        </div>
        <div className='post-author-details'>
            <h5>By: John Doe</h5>
            <small>Just Now</small>
        </div>

   </Link>
  )
}

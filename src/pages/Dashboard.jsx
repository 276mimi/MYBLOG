import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dummy_Posts } from '../Components/Data'

export default function Dashboard() {
    const [posts, setPosts] = useState(Dummy_Posts)
  return (
    <section className='dashboard'>
      {
        posts.length ? <div className='container dashboard-container'>
            {
                posts.map((post) => {
                    return <article key={posts.id} className='dashboard-post'>
                        <div className='dashboard-post-info'>
                            <div className="dashboard-post-image">
                                <img src={post.postImg} alt="" />
                            </div>
                            <h5>{post.title}</h5>
                        </div>
                        <div className='dashboard-post-action'>
                            <Link to={`/post/${post.id}`} className='btn-sm btn'>View</Link>
                            <Link to={`/posts/${post.id}/edit`} className='btn-sm btn-primary'>Edit</Link>
                            <Link to={`/posts/${post.id}/delete`} className='btn-sm btn-danger'>Delete</Link>
                        </div>
                    </article>
                })
            }

        </div>: <h1>No Posts Yet</h1>
      } 
    </section>
  )
}

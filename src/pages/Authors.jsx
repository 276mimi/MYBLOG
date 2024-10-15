import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import author1 from '../images/author1.jpg'
import author2 from '../images/author2.jpg'
import author3 from '../images/author3.jpg'
import author4 from '../images/author4.jpg'

const AuthorsData = [
  {id: 1, avatar: author1, name: 'YourFavTechSis', posts: 13},
  {id: 2, avatar: author2, name: 'Emmanuel Ikenns', posts: 40},
  {id: 3, avatar: author3, name: 'Pablo Davis', posts: 2},
  {id: 4, avatar: author4, name: 'Martin Amad', posts: 1},
  {id: 5, avatar: author2, name: 'Razaq', posts: 3},
]

export default function Authors() {
  const [authors, setAuthors] = useState(AuthorsData)

  return (
    <section className='authors'>
      {authors.length > 0   ? <div className="container authors-container">
        {authors.map(({id, avatar, name, posts}) => {
          return <Link key={id} to={`./posts/users/${id}`} className='author'> 
            <div className='author-avatar'>
              <img src={avatar} alt={`Image of ${name}`} />
            </div>
            <div className="author-info">
              <h4>{name}</h4>
              <p>{posts}</p>
            </div>
          </Link>
        })}
      </div> : <h2 className='center'>No users/authors found</h2>}
    </section>
  )
}

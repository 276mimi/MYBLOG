import React from 'react'
import { Link } from 'react-router-dom'
import erroImage from '../images/errorimg.png'

export default function ErrorPage() {
  return (
    <div className='error-page'>
      <div className='center'>
        <img src={erroImage} alt="404" />
        <Link to='/' className='btn-primary butn'> Go Back To Home</Link>
      </div>
    </div>
  )
}

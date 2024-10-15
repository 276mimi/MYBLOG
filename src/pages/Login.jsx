import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../images/earth-science.jpg'

export default function Login() {
  const [userData, setuserData] = useState({
    email: "",
    password: ""
  })
  const changeInputHandler = (e) => {
    setuserData({...userData, [e.target.name]: e.target.value})
  }

  return (
    <section className='register-section'>
      <div className='form-main'>
        <div className="container">
          <h2>Sign In</h2>
        </div>
        <form className='form register-form'>
          <p className='form-err-msg'>This is the error message</p>
          <input type="email" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} autoFocus/>
          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler}/>

          <button type='submit' className='btn-primary formbtn'>Sign In</button>
        </form>

        <small>Don't have an account? <Link to={'/register'} className='link'>SignUp</Link></small>
        
      </div>
      <img src={img1} alt="" />
    </section>
  )
}


import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import automaticScrollUp from '../../Utils/ScrollUp';

const LoginFrom = () => {
 //Scroll Up Page
 automaticScrollUp();
  return (
   
    <section id='loginWrapper'>
      <div className="formWrapper">
        <div className="formHeading">
          <h4>Login</h4>
          <p>Enter Login details to get access</p>
        </div>
        <div className="inputBox">
          <label htmlFor="email">Username Or Email Address</label>
          <input type="email" placeholder='Username/Email address' autoComplete='off'/>

          <label htmlFor="email">Password</label>
          <input type="password" placeholder='Password' autoComplete='off'/>
          <div className="otherForms">
          <a href="/" className='forgetPass'>forget password?</a>
        </div>
        </div>
        <div className="loginFooter">
          <p>Don’t have an account? <Link to="/signup" className='signupBtn'>Sign Up</Link> here</p>
          <button>Login</button>

        </div>
      </div>

    </section>
 
  )
}

export default LoginFrom
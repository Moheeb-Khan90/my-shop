import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import automaticScrollUp from '../../Utils/ScrollUp'

const SignupForm = () => {

  //Scroll Up Page
  automaticScrollUp();
  return (

    <section id='signup-Wrapper'>
      <div className="form-Wrapper">
        <div className="form-Heading">
          <h4>sign up</h4>
          <Link to='/' className='back-link'> back to home</Link>
        </div>
        <div className="signup-inputBox">
          <label htmlFor="text">Username</label>
          <input type="text" placeholder='Username' autoComplete='off' />

          <label htmlFor="email"> Email Address</label>
          <input type="email" placeholder='Email address' autoComplete='off' />

          <label htmlFor="number">contact number</label>
          <input type="number" placeholder='contact number' autoComplete='off' />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Password' autoComplete='off' />
        </div>
        <div className="signup-Footer">
          <p>Do you have an account? <Link to="/login" className='signup-Btn'>login</Link> here</p>
          <button>signup</button>

        </div>
      </div>

    </section>

  )
}

export default SignupForm
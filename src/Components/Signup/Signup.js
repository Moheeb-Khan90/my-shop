import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import automaticScrollUp from '../../Utils/ScrollUp'
import Validations from '../../Validation/validation'
import { useState } from 'react'

const SignupForm = () => {
  const navigate = useNavigate();
  const [users, setUser] = useState({
    username: "",
    email: "",
    contactNumber: "",
    password: ""
  }
  )
  const [error, setError] = useState({
    username: "",
    email: "",
    contactNumber: "",
    password: "",
    length: ""
  })
  const { username, email, contactNumber, password } = users
  const fieldHandler = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value })
    // initially blank
    setError({ ...error, [e.target.name]: '' })

    const userValidator = Validations.validateUserName(username)
    if (!userValidator.isValid) {
      setError((prevErrors) => ({ ...prevErrors, username: userValidator.error }));
    }

    const emailValidator = Validations.validateEmail(email)
    if (!emailValidator.isValid) {
      setError((prevErrors) => ({ ...prevErrors, email: emailValidator.error }));
    }
    const passwordValidator = Validations.validatePassword(password)
    setError((prevErrors) => ({ ...prevErrors, password: passwordValidator }));
  }


  const formSubmitHandler = (e) => {
    e.preventDefault();

    // Check if any field is blank
    if (!username || !email || !contactNumber || !password) {
      setError((prevErrors) => ({
        ...prevErrors,
        length: 'All fields must be filled out.'
      }));
      return;
    } else {
      setError((prevErrors) => ({
        ...prevErrors,
        length: ''
      }));
      navigate('/my-shop')
      

   
    }

  };

  //Scroll Up Page
  automaticScrollUp();
  return (

    <section id='signup-Wrapper'>
      <div className="form-Wrapper">
        <div className="form-Heading">
          {error.length && <p className="error-message">{error.length}</p>}
          <h4>sign up</h4>
          <Link to='/my-shop' className='back-link'> back to home</Link>
        </div>
        <form className="signup-inputBox" onSubmit={formSubmitHandler} method='POST'>

          <label htmlFor="username">Username</label>
          <input type="text" name='username' id='username' placeholder='Username' autoComplete='off' onChange={fieldHandler} value={users.username} />
          {error.username && <p className="error-message">{error.username}</p>}


          <label htmlFor="mail"> Email Address</label>
          <input type="email" name='email' id='mail' placeholder='Email address' autoComplete='off' onChange={fieldHandler} value={users.email} />
          {error.email && <p className="error-message">{error.email}</p>}


          <label htmlFor="number">contact number</label>
          <input type="number" name='contactNumber' id='number' placeholder='contact number' autoComplete='off' onChange={fieldHandler} value={users.contactNumber} />
          {error.contactNumber && <p className="error-message">{error.contactNumber}</p>}

          <label htmlFor="password">Password</label>
          <input type="password" name='password' id='password' placeholder='Password' autoComplete='off' onChange={fieldHandler} value={users.password} />
          {error.password && <p className="error-message">{error.password}</p>}
          <div className="signup-Footer">
            <p>Do you have an account? <Link to="/login" className='signup-Btn'>login</Link> here</p>
            <button >signup</button>
          </div>
        </form>

      </div>

    </section>

  )
}

export default SignupForm


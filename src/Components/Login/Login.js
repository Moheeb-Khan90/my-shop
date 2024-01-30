import './Login.css'
import { Link, useNavigate} from 'react-router-dom'
import Validations from '../../Validation/validation'
import automaticScrollUp from '../../Utils/ScrollUp';
import { useState } from 'react';

const LoginFrom = () => {
  const navigate = useNavigate()
  const [users, setUser] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState({
    email: "",
    password: "",
    emptyField: ""
  })

  const { email, password } = users
  const fieldHandler = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value })
    // initially blank
    setError({ ...error, [e.target.name]: '' })

    const emailValidator = Validations.validateEmail(email)
    if (!emailValidator.isValid) {
      setError((prevErrors) => ({ ...prevErrors, email: emailValidator.error }));
    }
    const passwordValidator = Validations.validatePassword(password)
    setError((prevErrors) => ({ ...prevErrors, password: passwordValidator }));
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    //Scroll Up Page
  automaticScrollUp();

    // Check if any field is blank
    if (!email || !password) {
      setError((prevErrors) => ({
        ...prevErrors,
        emptyField: 'All fields must be filled out.'
      }));
      return;
    } else {
      setError((prevErrors) => ({
        ...prevErrors,
        emptyField: ''
      }));
      navigate('/')
    }

  };
  
  return (

    <section id='loginWrapper'>
      <div className="formWrapper">
        <div className="formHeading">
          {<p className="error-message" style={{'color':'red'}}>{error.emptyField}</p>}
          <h4>Login</h4>
          <p>Enter Login details to get access</p>
        </div>
        <form className="inputBox" method='POST' onSubmit={formSubmitHandler}>
          <label htmlFor="email">Username Or Email Address</label>
          <input type="email" name='email' placeholder='Username/Email address' autoComplete='off' onChange={fieldHandler} value={users.email} />

          <label htmlFor="email">Password</label>
          <input type="password" name='password' placeholder='Password' autoComplete='off' onChange={fieldHandler} value={users.password} />
          <div className="otherForms">
            <Link to="/" className='forgetPass'>forget password?</Link>
          </div>
          <div className="loginFooter">
            <p>Don’t have an account? <Link to="/signup" className='signupBtn'>Sign Up</Link> here</p>
            <button>Login</button>
          </div>
        </form>
      </div>

    </section>

  )
}

export default LoginFrom
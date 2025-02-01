import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import automaticScrollUp from '../../Utils/ScrollUp';
import Validations from '../../Validation/validation';
import { useState, useEffect } from 'react';

const SignupForm = () => {
  const navigate = useNavigate();

  const [users, setUser] = useState({
    username: "",
    email: "",
    contactNumber: "",
    password: ""
  });

  const [error, setError] = useState({
    username: "",
    email: "",
    contactNumber: "",
    password: "",
    emptyField: ""
  });

  const { username, email, contactNumber, password } = users;

  // ✅ useEffect for Real-time Validation
  useEffect(() => {
    if (username) {
      const userValidator = Validations.validateUserName(username);
      setError(prev => ({ ...prev, username: userValidator.error }));
    }

    if (email) {
      const emailValidator = Validations.validateEmail(email);
      setError(prev => ({ ...prev, email: emailValidator.error }));
    }

    if (password) {
      const passwordValidator = Validations.validatePassword(password);
      setError(prev => ({ ...prev, password: passwordValidator.error }));
    }

    if (contactNumber) {
      const contactValidator = Validations.validateContactNumber(contactNumber);
      setError(prev => ({ ...prev, contactNumber: contactValidator.error }));
    }
  }, [username, email, contactNumber, password]);

  const fieldHandler = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
    setError(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    automaticScrollUp();

    if (!username || !email || !contactNumber || !password) {
      setError(prev => ({ ...prev, emptyField: 'All fields must be filled out.' }));
      return;
    }

    // ✅ Final Validation Check before submission
    if (error.username || error.email || error.contactNumber || error.password) {
      setError(prev => ({ ...prev, emptyField: 'Please fix the errors before submitting.' }));
      return;
    }

    setError(prev => ({ ...prev, emptyField: '' }));
    navigate('/');
  };

  return (
    <section id='signup-Wrapper'>
      <div className="form-Wrapper">
        <div className="form-Heading">
          {error.emptyField && <p className="error-message">{error.emptyField}</p>}
          <h4>Sign Up</h4>
          <Link to='/' className='back-link'>Back to Home</Link>
        </div>
        <form className="signup-inputBox" onSubmit={formSubmitHandler} method='POST'>

          <label htmlFor="username">Username</label>
          <input type="text" name='username' id='username' placeholder='Username' autoComplete='off' onChange={fieldHandler} value={users.username} />
          {error.username && <p className="error-message">{error.username}</p>}

          <label htmlFor="mail"> Email Address</label>
          <input type="email" name='email' id='mail' placeholder='Email address' autoComplete='off' onChange={fieldHandler} value={users.email} />
          {error.email && <p className="error-message">{error.email}</p>}

          <label htmlFor="number">Contact Number</label>
          <input type="number" name='contactNumber' id='number' placeholder='Contact number' autoComplete='off' onChange={fieldHandler} value={users.contactNumber} />
          {error.contactNumber && <p className="error-message">{error.contactNumber}</p>}

          <label htmlFor="password">Password</label>
          <input type="password" name='password' id='password' placeholder='Password' autoComplete='off' onChange={fieldHandler} value={users.password} />
          {error.password && <p className="error-message">{error.password}</p>}

          <div className="signup-Footer">
            <p>Do you have an account? <Link to="/login" className='signup-Btn'>Login</Link> here</p>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignupForm;

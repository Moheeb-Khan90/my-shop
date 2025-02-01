const Validations = {
  userNameRegex: /^[a-zA-Z\s]+$/,
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phoneNumberRegex: /^\d{11}$/,  // 10-digit phone number
  passwordRegex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,

  validateUserName: (userName) => {
      const isValid = Validations.userNameRegex.test(userName);
      return {
          isValid,
          error: isValid ? '' : 'Invalid username. Only use alphabetic letters.'
      };
  },

  validateEmail: (email) => {
      const isValid = Validations.emailRegex.test(email);
      return {
          isValid,
          error: isValid ? '' : 'Invalid email address.'
      };
  },

  validatePassword: (password) => {
      const isValid = Validations.passwordRegex.test(password);
      let error = '';
      
      if (!isValid) {
          if (password.length < 8) error = 'Password must be at least 8 characters long.';
          else if (!/[A-Z]/.test(password)) error = 'Password must contain at least one uppercase letter.';
          else if (!/[a-z]/.test(password)) error = 'Password must contain at least one lowercase letter.';
          else if (!/\d/.test(password)) error = 'Password must contain at least one digit.';
          else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)) error = 'Password must contain at least one special character.';
      }

      return { isValid, error };
  },

  validateContactNumber: (contactNumber) => {
      const isValid = Validations.phoneNumberRegex.test(contactNumber);
      return {
          isValid,
          error: isValid ? '' : 'Invalid contact number'
      };
  }
};

export default Validations;

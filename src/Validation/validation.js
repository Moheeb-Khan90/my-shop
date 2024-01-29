
const Validations = {
    userNameRegex: /^[a-zA-Z]+$/,
    emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phoneNumberRegex: /^\d+$/,
    passwordRegex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    ,

  
    validateUserName: (userName) => {
      const isValid = Validations.userNameRegex.test(userName);
      
      return {
        isValid,
        error: isValid ? '' : 'Invalid username. Olny use Alphbetic Letters'
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
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password);
      
        // Check each criteria
        if (password.length <= minLength) {
          return 'Password must be at least 8 characters long.';
        }
        if (!hasUppercase) {
          return 'Password must contain at least one uppercase letter.';
        }
        if (!hasLowercase) {
          return 'Password must contain at least one lowercase letter.';
        }
        if (!hasDigit) {
          return 'Password must contain at least one digit.';
        }
        if (!hasSpecialChar) {
          return 'Password must contain at least one special character.';
        }
      },


  
    // Add more validation methods as needed
  };
  
  export default Validations;
  
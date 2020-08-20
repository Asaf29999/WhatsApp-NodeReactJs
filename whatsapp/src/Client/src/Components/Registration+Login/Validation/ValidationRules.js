function validateLogin(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 or more characters';
  }

  return errors;
};

function validateSignUp(values) {
  let errors = {};
  console.log("validate :")
  console.log(values.email == null);
  console.log(errors);
 
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    else if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters';
    }
    if (!values.firstName) {
      errors.fname = 'First name is required';
    } else if (!/^[A-Za-z]+$/.test(values.firstName)) {
      errors.fname = 'First name is invalid';
    }
    if (!values.lastName) {
      errors.lname = 'Last name is required';
    } else if (!/^[A-Za-z]+$/.test(values.lastName)) {
      errors.lname = 'Last name is invalid';
    }
  
  return errors;
};

module.exports = {
  validateLogin: validateLogin,
  validateSignUp: validateSignUp
};
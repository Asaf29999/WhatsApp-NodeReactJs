import swal from 'sweetalert';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import useFetch from './useFetch';

const passwordHash = require('password-hash'); 

const useForm = (validate) => {

  const history = useHistory();
  const [values, setValues] = useState({});
  const [signupErrors, setSignuperrors] = useState([]);
  const [loginErrors, setLoginerrors] = useState([]);

  const { createAccount, getUserByEmail } = useFetch();

  const handleSignUp = async (event) => {
    event.preventDefault();
  
    console.log(signupErrors);
    console.log(values);
   
    const user = (await getUserByEmail(values.email))[0];
    const alreadyUser = Boolean(user);

    if (Object.keys(signupErrors).length === 0 && !values.email == null && !alreadyUser) {

      // store.dispatch({
      //   type: 'LOG_IN',
      //   user: user
      // })

      createAccount(values);
    } else if (Object.keys(signupErrors).length === 0  && alreadyUser) {
      swal("There is already a registered account on this email", "", "error");
      console.log('error', signupErrors)
    } else {
      swal("Proper data must be entered", "", "error");
      console.log('error', signupErrors)
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    console.log(loginErrors);
    console.log(values);

    const userByEmail = (await getUserByEmail(values.email))[0];
   
    const HashPass = userByEmail ? userByEmail.password : null;

    const verifyUser = passwordHash.verify(values.password, HashPass);

    if (Object.keys(loginErrors).length === 0 && !values.email == null && userByEmail) {
      
      if (verifyUser) {
        swal(`Welcome Back ${userByEmail.firstName} !`, "", "success").then(() => {
          history.push("/signed/");
        });
      }
      else {
        swal("Worng Password, Try Aagin ", "", "error");
        console.log('error', loginErrors)
      }
    }
    else if (Object.keys(loginErrors).length === 0 && !userByEmail) {
      swal("This email does not match any account", "", "error");
      console.log('error', loginErrors)
    } else {
      swal("Proper data must be entered", "", "error");
      console.log('error', loginErrors)
    }
  };

  const handleChangeSignUp = (event) => {

    event.persist(); // What is that ???????????
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setSignuperrors(validate(values));
  };
  
  const handleChangeLogin = (event) => {

    event.persist(); // What is that  ???????????
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setLoginerrors(validate(values));
  };

  return {
    handleChangeLogin,
    handleChangeSignUp,
    handleLogin,
    handleSignUp,
    values,
    loginErrors,
    signupErrors,
  }
};

export default useForm;
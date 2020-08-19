import swal from 'sweetalert';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import useFetch from './useFetch';

const passwordHash = require('password-hash'); 


const useForm = (validate) => {

  const history = useHistory();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState("s");

  const { createAccount, getUserByEmailAndPass, getUserByEmail } = useFetch();

  const handleSignUp = async (event) => {
    event.preventDefault();

    //console.log(values.email);
    const user = (await getUserByEmail(values.email))[0];
    const alreadyUser = Boolean(user);

    if (Object.keys(errors).length === 0 && !alreadyUser) {

      // store.dispatch({
      //   type: 'LOG_IN',
      //   user: user
      // })

      createAccount(values);
    } else if (Object.keys(errors).length === 0 && alreadyUser) {
      swal("There is already a registered account on this email", "", "error");
      console.log('error', errors)
    } else {
      swal("Proper data must be entered", "", "error");
      console.log('error', errors)
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

   // console.log(values.email);

    const userByEmail = (await getUserByEmail(values.email))[0];
   
    const HashPass = userByEmail ? userByEmail.password : null;

    const verifyUser = passwordHash.verify(values.password, HashPass);

    if (Object.keys(errors).length === 2 && userByEmail) {
      
      if (verifyUser) {
        swal(`Welcome Back ${userByEmail.firstName} !`, "", "success").then(() => {
          history.push("/signed/");
        });
      }
      else {
        swal("Worng Password, Try Aagin ", "", "error");
        console.log('error', errors)
      }
    }
    else if (Object.keys(errors).length === 2 && !userByEmail) {
      swal("This email does not match any account", "", "error");
      console.log('error', errors)
    } else {
      swal("Proper data must be entered", "", "error");
      console.log('error', errors)
    }
  };

  const handleChange = (event) => {

    event.persist(); // What is that  ???????????
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setErrors(validate(values));
  };

  return {
    handleChange,
    handleLogin,
    handleSignUp,
    values,
    errors,
  }
};

export default useForm;
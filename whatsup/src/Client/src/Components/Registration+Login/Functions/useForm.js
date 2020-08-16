import { useState } from 'react';
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";
import useFetch from './useFetch';



const useForm = (validate) => {

  const history = useHistory();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState("s");

  const { createAccount, userExist, emailExist } = useFetch();

  const handleSignUp = async (event) => {
    event.preventDefault();

    console.log(values.email);
    const user = (await emailExist(values.email))[0];
    const alreadyUser = Boolean(user);

    if (Object.keys(errors).length === 0 && !alreadyUser) {

      // store.dispatch({
      //   type: 'LOG_IN',
      //   user: user
      // })

      createAccount();
    }
    else if (Object.keys(errors).length === 0 && alreadyUser) {
      swal("There is already a registered account on this email", "", "error");
      console.log('error', errors)
    }
    else {
      swal("Proper data must be entered", "", "error");
      console.log('error', errors)
    }
  };


  const handleLogin = async (event) => {
    event.preventDefault();

    console.log(values.email);

    const user = (await emailExist(values.email))[0];
    const alreadyUser = Boolean(user);
    const HashPass = user ? user.password : null;

    const verifyUser = (await userExist(values.email, values.password, HashPass));

    console.log(verifyUser);

    if (Object.keys(errors).length === 2 && alreadyUser) {
      
      
      if (verifyUser) {
        swal(`Welcome Back ${user.firstName} !`, "", "success").then(() => {
          history.push("/signed/");
        });
      }
      else {
        swal("Worng Password, Try Aagin ", "", "error");
        console.log('error', errors)

      }

    }
    else if (Object.keys(errors).length === 2 && !verifyUser) {
      swal("This email does not match any account", "", "error");
      console.log('error', errors)
    }
    else {
      swal("Proper data must be entered", "", "error");
      console.log('error', errors)
    }
  };


  const handleChange = (event) => {

    event.persist();
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
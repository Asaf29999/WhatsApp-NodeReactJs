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
    const res = await emailExist(values.email);
    const alreadyUser = Boolean(res[0]);
   
    console.log(res[0]);
  
    if (Object.keys(errors).length === 0 && !alreadyUser) {
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

    const verifyUser = (await userExist(values.email, values.password))[0];
    

    console.log(verifyUser);   
  
    if (Object.keys(errors).length === 2 && verifyUser) {

      swal(`Welcome Back ${verifyUser.firstName} !`, "", "success").then(() => {
        history.push("/signed/");
      });
    }
    else if (Object.keys(errors).length === 2 && !verifyUser) {
      swal("This data does not match any account", "", "error");
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
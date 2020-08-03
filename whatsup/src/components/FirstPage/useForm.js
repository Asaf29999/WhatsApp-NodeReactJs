import { useState } from 'react';
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";
import useFetch from './useFetch';



const useForm = (validate) => {

  const history = useHistory();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState("s");
 // const [userExist, setUserExist] = useState("");


  const { createAccount, userExist } = useFetch();





  const handleSignUp = (event) => {
    event.preventDefault();

    // פה לבצע בדיקה מול הDB userExist

    //setIsSubmitting(true);
    if (Object.keys(errors).length === 0 && !userExist(values.email)) {
      
      createAccount();
      swal("You have successfully registered!", "", "success").then(() => {
        history.push("/signed/");
      });
    }
    else {
      swal("Something went wrong", "", "error");
      console.log('error', errors)
    }
  };


  const handleLogin = (event) => {
    event.preventDefault();

    // פה לבצע בדיקה מול הDB userExist

    if (Object.keys(errors).length === 0 && userExist(values.email)) {

      swal("Welcome Back!", "", "success").then(() => {
        history.push("/signed/");
      });
    }
    else {
      swal("Something went wrong", "", "error");
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
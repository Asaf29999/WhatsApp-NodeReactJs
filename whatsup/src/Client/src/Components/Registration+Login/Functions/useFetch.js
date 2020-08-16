import formJson from 'form-json';
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";
import {encodePass} from "../Encryption/Encryption"
var passwordHash = require('password-hash');





const useFetch = () => {
  const history = useHistory();


  const createAccount = () => {
  
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let form = document.getElementById('form');
    const user = (formJson(form));
   
    console.log(user)
    user.password = encodePass(user.password);
   // console.log(encodeUserPass(user))

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(user),
      redirect: 'follow',
    };

    fetch("http://localhost:3001/user", requestOptions)
      .then(response => {
        return response.json()
      })
      .then(result => {
        swal("You have successfully registered!", "", "success").then(() => {
          history.push("/signed/");
        });
      })
      .catch(error => {
        swal("Something went wrong with the registertion", error, "error");
        console.log('error', error)
      });
  };




//לתקן את הפונקציה הזאת שתחזיר את המשתמש רק אם הסיסמאות תואמות 
  const userExist = (email, password, HashPass) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "email": email, "password": encodePass(password)});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,

    };

   return passwordHash.verify(password , HashPass) ? 
   (fetch("http://localhost:3001/user/login", requestOptions)
     .then(res => res.json())
     .then(data => data)) : null
  };



  const emailExist = (email) => {
    return fetch(`http://localhost:3001/user/email/${email}`)
      .then(res => res.json())
      .then(data => data);
  };


  return {
    createAccount,
    userExist,
    emailExist
  };


};

export default useFetch;
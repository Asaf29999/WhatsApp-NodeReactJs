import swal from 'sweetalert';
import { useHistory } from "react-router-dom";
import {encodePass} from "../Encryption/Encryption"
const passwordHash = require('password-hash'); // Change

require('dotenv').config()

const useFetch = () => {
  const history = useHistory();

  const host = process.env.REACT_APP_HOST;
  const dbPort = process.env.REACT_APP_DB_PORT;
  
  const createAccount = (user) => {
  
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    user.password = encodePass(user.password);
    
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(user),
      redirect: 'follow', // what is that ??????????????????????????????????????????????????????????????
    };

    fetch(`http://${host}:${dbPort}/user`, requestOptions)
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

// לתקן את הפונקציה הזאת שתחזיר את המשתמש רק אם הסיסמאות תואמות 
  const getUserByEmailAndPass = (email, password, HashPass) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({ "email": email, "password": encodePass(password)});

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

   return passwordHash.verify(password , HashPass) ? 
   (fetch(`http://${host}:${dbPort}/user/login`, requestOptions)
     .then(res => res.json())
     .then(data => data)) : null
  };

  const getUserByEmail = (email) => {
    return fetch(`http://${host}:${dbPort}/user/email/${email}`)
      .then(res => res.json())
      .then(data => data);
  };

  return {
    createAccount,
    getUserByEmailAndPass,
    getUserByEmail
  };
};

export default useFetch;
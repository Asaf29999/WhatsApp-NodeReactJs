import formJson from 'form-json';
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";




const useFetch = () => {
  const history = useHistory();


  const createAccount = () => {
    //  event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let form = document.getElementById('form');
    const user = JSON.stringify(formJson(form));

    // console.log(user);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: user,
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





  const userExist = (email, password) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "email": email, "password": password });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,

    };

   return fetch("http://localhost:3001/user/login", requestOptions)
     .then(res => res.json())
     .then(data => data);
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
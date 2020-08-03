import formJson from 'form-json';
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";




const useFetch = () => {
  const history = useHistory();


  const createAccount = (event) => {
    event.preventDefault();

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
      .then(result => console.log(result))
      .catch(error => {
        swal("Something went wrong", error, "error");
        console.log('error', error)
      });
  };

  const userExist = (email) => {
    fetch(`http://localhost:3001/user/${email}`)
      .then(Response => Response.jason())
      .then(data => {
        console.log(data);
        return data
      })
  };

  return {
    createAccount,
    userExist
  };


};

export default useFetch;
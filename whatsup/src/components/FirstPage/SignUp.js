import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link, useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import formJson from 'form-json';
import AppBar from './Appbar';
import useForm from './useForm';
import validate from './LoginFormValidationRules';


const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: '2',
    width: '940px',
    borderRadius: '3px;',
    boxShadow: '0 17px 50px 0 rgba(0,0,0,.19), 0 12px 15px 0 rgba(0,0,0,.24);',
  },
  form: {
    width: '50%',
    marginTop: theme.spacing(8),

  },
  submit: {
    margin: theme.spacing(3, 1, 5),
    width: '95%',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: '#D7DBD7',
    alignItems: 'stretch',
    marginTop: theme.spacing(-16),

  },
  Text: {
    color: '#009688',
    fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;',
  },
  background: {
    minWidth: '100vw',
    minhHeight: '100vh',
    backgroundColor: '#D7DBD7'
  }

}));


const SignUp = () => {

  const classes = useStyles();
  const history = useHistory();

  const {
    values,
    errors,
    handleChange,
    handleSignUp
  } = useForm(validate);

  

  const handleSubmit = (event) => {
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
        swal("You have successfully registered!", "", "success").then(() => {
          history.push("/signed/");
        });
        return response.json()
      })
      .then(result => console.log(result))
      .catch(error => {
        swal("Something went wrong", error, "error");
        console.log('error', error)
      });
  }

  return (
    <div className={classes.background}>
      <AppBar />
      <Grid container item xs={12} justify="center" className={classes.root} >

        <div
          className={classes.paper}>
          <Paper elevation={3} className={classes.paper}>
            <Typography className={classes.Text} component="h1" variant="h2">
              Sign up
        </Typography>
            <form id='form' className={classes.form}
              onSubmit={handleSubmit} noValidate>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    helperText={errors.fname || ''}
                    error={errors.fname}
                    onChange={handleChange}
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    helperText={errors.lname || ''}
                    variant="outlined"
                    error={errors.lname}
                    onChange={handleChange}
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={handleChange}
                    helperText={errors.email || ''}
                    error = {errors.email}
                    fullWidth
                    variant="outlined"
                    required
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  onChange={handleChange}
                  helperText={errors.password || ''}
                  error = {errors.password}
                  fullWidth
                    variant="outlined"
                    required
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox className={classes.Text} value="allowExtraEmails" color="secondary" />}
                    label="Join the mailing list."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="secondary"
                className={classes.submit}>
                Sign Up
          </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link className={classes.Text} to="/" variant="body3">
                    Already have an account? Sign in
              </Link>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </div>
      </Grid>
    </div>
  );
}
export default SignUp;

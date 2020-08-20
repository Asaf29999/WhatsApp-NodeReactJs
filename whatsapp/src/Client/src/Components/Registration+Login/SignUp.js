import React from 'react';
import { Link } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import AppBar from './Appbar';
import useForm from './Functions/useForm';
import {validateSignUp} from './Validation/ValidationRules';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: '2',
    width: '940px',
    borderRadius: '3px;',
    boxShadow: '0 17px 50px 0 rgba(0,0,0,.19), 0 12px 15px 0 rgba(0,0,0,.10);',
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
    marginTop: theme.spacing(-11.5),
  },
  Text: {
    color: '#009688',
    fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;',
  },
  background: {
    minWidth: '100vw',
    minhHeight: '100vh',
  }

}));

const SignUp = () => {
  const classes = useStyles();
  const {
    signupErrors,
    handleChangeSignUp,
    handleSignUp
  } = useForm(validateSignUp);

  return (
    <div className={classes.background} >
      <AppBar />
      <Grid container item xs={12} justify="center" className={classes.root} >

        <div
          className={classes.paper}>
          <Paper elevation={3} className={classes.paper}>
            <Typography className={classes.Text} component="h1" variant="h2">
              Sign up
        </Typography>
            <form id='form' className={classes.form}
              onSubmit={handleSignUp} noValidate>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    helperText={signupErrors.fname || ''}
                    error={signupErrors.fname}
                    onChange={handleChangeSignUp}
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
                    helperText={signupErrors.lname || ''}
                    variant="outlined"
                    error={signupErrors.lname}
                    onChange={handleChangeSignUp}
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
                    helperText={signupErrors.email || ''}
                    error={signupErrors.email}
                    onChange={handleChangeSignUp}
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
                    helperText={signupErrors.password || ''}
                    error={signupErrors.password}
                    onChange={handleChangeSignUp}
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
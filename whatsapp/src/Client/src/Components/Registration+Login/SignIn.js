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

import AppBar from './Appbar'
import useForm from './Functions/useForm';
import {validateLogin} from './Validation/ValidationRules';

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
    alignItems: 'stretch',
    marginTop: theme.spacing(-11.5),
  },
  Text: {
    color: '#009688',
    fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;',
  }

}));

const SignIn = () => {
  const classes = useStyles();

  const {
    loginErrors,
    handleChangeLogin,
    handleLogin,
  } = useForm(validateLogin);

  return (
    <div>
      <AppBar />
      <Grid container item xs={12} justify="center" className={classes.root}>

        <div
          className={classes.paper}>
          <Paper elevation={3} className={classes.paper}>
            <Typography className={classes.Text} component="h1" variant="h2">
              Sign in
            </Typography>
            <form onSubmit={handleLogin} className={classes.form} noValidate>
              <TextField
                helperText={loginErrors ? loginErrors.email : ''}
                error={loginErrors ? loginErrors.email : false}
                onChange={handleChangeLogin}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                onChange={handleChangeLogin}
                helperText={loginErrors ? loginErrors.password : ''}
                error={loginErrors ? loginErrors.password : false}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox className={classes.Text} value="remember" color="secondary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="secondary"
                className={classes.submit}
              >
                Sign In
          </Button>
              <Grid container>
                <Grid item>
                  <Link className={classes.Text} to="/signup" variant="body3">
                    {"Don't have an account? Sign Up"}
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

export default SignIn;
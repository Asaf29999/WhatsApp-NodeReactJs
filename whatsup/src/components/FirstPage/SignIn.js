import React from 'react';
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
import Appbar from './Appbar'
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
  }

}));

const SignIn = () => {

  const history = useHistory();
  const classes = useStyles();

  const {
    errors,
    handleChange,
    handleLogin,
  } = useForm(login, validate);

  function login() {
    swal("You have successfully registered!", "", "success").then(() => {
      history.push("/signed/");
    });

  }

  return (
    <div>
      <Appbar />
      <Grid container item xs={12} justify="center"  className={classes.root}>

        <div
          className={classes.paper}>
          <Paper elevation={3} className={classes.paper}>
            <Typography className={classes.Text} component="h1" variant="h2">
              Sign in
        </Typography>
            <form onSubmit={handleLogin} className={classes.form} noValidate>
              
              <TextField
                helperText={errors.email || ''}
                error={errors.email}
                onChange={handleChange}
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
                onChange={handleChange}
                helperText={errors.password || ''}
                error={errors.password}
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
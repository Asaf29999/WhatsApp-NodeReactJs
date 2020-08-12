
import ManuBar from './ContactsSide/manuBar';
import SearchBar from './ContactsSide/searchBar';
import Inputer from './ChatSide/Inputer'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SearchBar />
        </Grid>
        <Grid item xs={1}>
          <ManuBar />
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>Chat side</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>contacts</Paper>
        </Grid>
        <Grid item xs={8}>
          <Inputer/>
        </Grid>
      </Grid>
    </div>
  );
}


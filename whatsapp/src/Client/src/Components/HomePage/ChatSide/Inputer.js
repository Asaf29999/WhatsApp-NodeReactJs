import React from 'react'
import InputEmoji from 'react-input-emoji'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: '2',
    width: '640px',
    borderRadius: '20px;',
    marginTop: '48%',
    marginLeft: "12%",
  }
}));


 const Inputer = () => {
  const classes = useStyles();
  const text  = '';

  function handleOnEnter (text) {
    console.log('enter', text)
    // send to the server
  }

  return (
    <div className ={classes.root}>
     <InputEmoji
      value={text}
      onChange={handleOnEnter}
      cleanOnEnter
      onEnter={handleOnEnter}
      placeholder="Type a message"
    />
    </div>

  )
}
export default Inputer;
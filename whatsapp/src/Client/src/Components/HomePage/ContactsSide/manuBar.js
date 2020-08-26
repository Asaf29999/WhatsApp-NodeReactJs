import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useHistory}  from "react-router-dom";
import Chip from '@material-ui/core/Chip';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';





const useStyles = makeStyles((theme) =>({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));
const ITEM_HEIGHT = 48;

export default function LongMenu() {

  const classes = useStyles();
  const theme = useTheme();
  const [state, setState] = React.useState({
    left: false,
  });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();
  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    event.preventDefault();
    setPersonName(event.target.value);
    
  };
  
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  
  

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    >
      <List>
          <ListItem button key="New Group">
            <ListItemText primary={"New Conversion"} />
          </ListItem>
      </List>
      <Divider />
      <List>
      <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Groupname"
                label="Grup Name"
                name="Groupname"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="Description"
                label="Description"
                type="Description"
                id="description"
              />
               <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Participants</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName,theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
               <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="secondary"
                className={classes.submit}
              >
                Start New Conversion
          </Button>
      </List>
    </div>
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }; 
  
  const logOut = () => { 
    history.push("/")
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={toggleDrawer('left', true)}>New Conversion</MenuItem>
        <Divider/>
        <MenuItem onClick={logOut}>Log Out</MenuItem>
        
        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
      </Menu>
      
    </div>
  );
}

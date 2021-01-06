import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {TextField} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    // backgroundColor:'red',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  inputStyle:{
    marginTop:5,
    marginBottom:5
  },
  btn:{
    marginTop:'10%'
  }
}));

export default function Login() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [username,setUsername] = React.useState(null);
  const [password,setPassword] = React.useState(null);
  const [usernameError,setUsernameError] = React.useState(null);
  const [passwordError,setPasswordError] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onLoginPress = () =>{
    if(!username){
      setUsernameError("Please enter an username");
    } else if(!password){
      setPasswordError("Please enter an password");
      setUsernameError(null);
    } else {
      alert('Login!');
      setUsernameError(null) , setPasswordError(null) , setUsername(null) , setPassword(null)
    }
  }

  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog
        maxWidth="xs"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter you username and password
          </DialogContentText>
          <form className={classes.form} noValidate>
            <TextField 
              error={usernameError == null ? false : true}
              id="standard-basic" 
              label="Username" 
              className={classes.inputStyle}
              helperText={usernameError}
              onChange={(e)=>{setUsername(e.target.value)}}
            />
            <TextField 
              error={passwordError == null ? false : true}
              id="standard-password-input" 
              type="password" 
              label="Password"
              className={classes.inputStyle}
              helperText={passwordError}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          <Button onClick={onLoginPress} className={classes.btn} variant="contained" color="primary">
            Login
          </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

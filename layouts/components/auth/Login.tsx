import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {CircularProgress, TextField, Typography} from '@material-ui/core'
import {useMutation} from "react-query";
import {login} from '../../../lib/services/ApiService';
import {useCookies} from "react-cookie";
import useLogin from "../../../hooks/useLogin";

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
  const [username,setUsername] = React.useState('');
  const [password,setPassword] = React.useState('');
  const [usernameError,setUsernameError] = React.useState(null);
  const [passwordError,setPasswordError] = React.useState(null);

  const loginMutation = useLogin();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {if(loginMutation.isSuccess) setOpen(false)}, [loginMutation.isSuccess])

  const onLoginPress = (e) =>{
    e.preventDefault()
    if(!username){
      setUsernameError("Please enter an username");
    } else if(!password){
      setPasswordError("Please enter an password");
      setUsernameError(null);
    } else {
      const user = {
        username,
        password
      }
      setUsernameError(null);
      setPasswordError(null)
      setUsername('')
      setPassword('')
      loginMutation.mutate(user);
    }
  }



  return (
    <React.Fragment>
      <Button onClick={handleClickOpen} style={{flexGrow: 1}}>
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
          <form className={classes.form} onSubmit={onLoginPress}>
            <TextField 
              error={usernameError == null ? false : true}
              id="standard-basic" 
              label="Username" 
              className={classes.inputStyle}
              helperText={usernameError}
              value={username}
              onChange={(e)=>{setUsername(e.target.value)}}
            />
            <TextField
              error={passwordError == null ? false : true}
              id="standard-password-input"
              type="password"
              label="Password"
              className={classes.inputStyle}
              helperText={passwordError}
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          <Button type='submit' className={classes.btn} variant="contained" color="primary">
            {loginMutation.isLoading ? <CircularProgress style={{color: 'white', borderColor: 'white'}} size={20}/> : 'Login'}
          </Button>
            {loginMutation.isError && <Typography variant='body2' color="error" style={{marginTop: '12px'}}>There is a problem with your credentials</Typography>}
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

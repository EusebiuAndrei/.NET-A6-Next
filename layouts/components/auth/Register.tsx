import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {CircularProgress, TextField, Typography} from '@material-ui/core'
import useLogin from "../../../hooks/useLogin";
import {useDebouncedCallback} from "use-debounce";
import useRegister from "../../../hooks/useRegister";

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

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

export default function Register() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [username,setUsername] = React.useState('');
  const [password,setPassword] = React.useState('');
  const [email,setEmail] = React.useState('');

  const [usernameError,setUsernameError] = React.useState(null);
  const [passwordError,setPasswordError] = React.useState(null);
  const [emailError,setEmailError] = React.useState(null);

  const registerMutation = useRegister();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {if(registerMutation.isSuccess) setOpen(false)}, [registerMutation.isSuccess])

  const emailDebounced = useDebouncedCallback(
      (email, emailError) => {
        // console.log("EMAIL", email, email.match(emailRegex), !email.match(emailRegex) && email.length > 0)
        if(!email.match(emailRegex) && email.length > 0 && !emailError)
          setEmailError('Please enter a valid email address')
        else if (emailError) {
          setEmailError(null)
        }
      },
      300
  );

  useEffect(() => {
    emailDebounced.callback(email, emailError)
  }, [email])

  const onLoginPress = (e) =>{
    e.preventDefault()
    if(!username){
      setUsernameError("Please enter an username");
      return;
    }
    if(!password){
      setPasswordError("Please enter an password");
      setUsernameError(null);
      return;
    }

    const user = {
      email,
      username,
      password
    }
    setUsernameError(null);
    setPasswordError(null)
    setUsername('')
    setPassword('')
    registerMutation.mutate(user);
  }



  return (
      <React.Fragment>
        <Button onClick={handleClickOpen} style={{flexGrow: 1}}>
          Register
        </Button>
        <Dialog
            maxWidth="xs"
            open={open}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title">Register</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter you username, password and email
            </DialogContentText>
            <form className={classes.form} onSubmit={onLoginPress}>
              <TextField
                  error={emailError == null ? false : true}
                  id="standard-email-input"
                  label="Email"
                  className={classes.inputStyle}
                  helperText={emailError}
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
              />
              {/*<TextField*/}
              {/*    style={{display: 'none'}}*/}
              {/*    error={usernameError == null ? false : true}*/}
              {/*    id="standard-basic"*/}
              {/*    label="Username"*/}
              {/*    className={classes.inputStyle}*/}
              {/*    helperText={usernameError}*/}
              {/*    value={username}*/}
              {/*    onChange={(e)=>{setUsername(e.target.value)}}*/}
              {/*/>*/}
              {/*<TextField*/}
              {/*    style={{display: 'none'}}*/}
              {/*    error={passwordError == null ? false : true}*/}
              {/*    id="standard-password-input"*/}
              {/*    type="password"*/}
              {/*    label="Password"*/}
              {/*    className={classes.inputStyle}*/}
              {/*    helperText={passwordError ?? '1* special character, 1* number, 1* uppercase letter, 1* lowercase letter, length > 8'}*/}
              {/*    value={password}*/}
              {/*    onChange={(e)=>{setPassword(e.target.value)}}*/}
              {/*/>*/}
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
                  helperText={passwordError ?? '1* special character, 1* number, 1* uppercase letter, 1* lowercase letter, length > 8'}
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
              />
              <Button type='submit' className={classes.btn} variant="contained" color="primary" disabled={Boolean(usernameError || passwordError || emailError)}>
                {registerMutation.isLoading ? <CircularProgress style={{color: 'white', borderColor: 'white'}} size={20}/> : 'Register'}
              </Button>
              {registerMutation.isError && <Typography variant='body2' color="error" style={{marginTop: '12px'}}>There is a problem with your credentials</Typography>}
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

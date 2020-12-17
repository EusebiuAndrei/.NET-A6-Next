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

export default function Register() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Register
      </Button>
      <Dialog
        maxWidth="xs"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Register</DialogTitle>
        <DialogContent >
          <DialogContentText>
            Enter username and password
          </DialogContentText>
          <form className={classes.form} noValidate>
            <TextField id="standard-basic" label="Username" className={classes.inputStyle}/>
            <TextField 
              id="standard-password-input" type="password" label="Password" className={classes.inputStyle}
            />
            <TextField 
              id="standard-password-input" type="password" label="Re-type password" className={classes.inputStyle}
            />
            <Button className={classes.btn} variant="contained" color="primary">
                Register
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

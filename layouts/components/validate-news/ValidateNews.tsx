import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
    CircularProgress,
    FormControl,
    FormHelperText,
    FormLabel, Input,
    InputLabel,
    Paper,
    TextField,
    Typography
} from '@material-ui/core'
import {useMutation} from "react-query";
import {useCookies} from "react-cookie";
import useLogin from "../../../hooks/useLogin";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    btn:{
        marginTop: theme.spacing(4)
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
        <Paper elevation={0} style={{width: '50%', margin: '0 auto', marginTop: '5em'}}>
            <Typography variant="h5" style={{marginBottom: '20px'}}>Lie detector test for news</Typography>
            <form className={classes.form} onSubmit={onLoginPress}>
                <FormControl className={classes.inputStyle}>
                    <FormLabel htmlFor="standard-basic">Username</FormLabel>
                    <Input
                        variant='contained'
                        style={{marginTop: '0'}}
                        error={usernameError == null ? false : true}
                        id="standard-basic"
                        value={username}
                        onChange={(e)=>{setUsername(e.target.value)}}
                    />
                    {passwordError && <FormHelperText id="standard-basic-v" error={usernameError == null ? false : true}>{usernameError}</FormHelperText>}
                </FormControl>
                <FormControl className={classes.inputStyle}>
                    <FormLabel htmlFor="my-helper-text">News</FormLabel>
                    <TextareaAutosize id="my-helper-text"
                                      aria-describedby="my-helper-text"
                                      aria-label="empty textarea"
                                      // placeholder="Here goes your news"
                                      rowsMin={15}
                                      value={password}
                                      onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    {passwordError && <FormHelperText id="my-helper-text-v" error={passwordError == null ? false : true}>{passwordError}</FormHelperText>}
                </FormControl>
                <Button type='submit' className={classes.btn} variant="contained" color="primary">
                    {loginMutation.isLoading ? <CircularProgress style={{color: 'white', borderColor: 'white'}} size={20}/> : 'Test'}
                </Button>
                {loginMutation.isError && <Typography variant='body2' color="error" style={{marginTop: '12px'}}>There is a problem with your credentials</Typography>}
            </form>
        </Paper>
    );
}

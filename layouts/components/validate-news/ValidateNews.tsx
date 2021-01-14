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
    Paper, Snackbar,
    TextField,
    Typography
} from '@material-ui/core'
import {useMutation} from "react-query";
import {useCookies} from "react-cookie";
import useValidateNews from "./useValidateNews";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import MuiAlert from '@material-ui/lab/Alert';

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
        marginTop: theme.spacing(4),
        padding: theme.spacing(0.75, 8)
    },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Login() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [username,setUsername] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [usernameError,setUsernameError] = React.useState(null);
    const [passwordError,setPasswordError] = React.useState(null);

    const [snackbarTrueOpen, setSnackbarTrueOpen] = React.useState(false);
    const handleSnackbarTrueClick = () => {
        setSnackbarTrueOpen(true);
    };
    const handleSnackbarTrueClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarTrueOpen(false);
    };

    const [snackbarFalseOpen, setSnackbarFalseOpen] = React.useState(false);
    const handleSnackbarFalseClick = () => {
        setSnackbarFalseOpen(true);
    };
    const handleSnackbarFalseClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarFalseOpen(false);
    };

    const validateNewsMutation = useValidateNews(handleSnackbarTrueClick, handleSnackbarFalseClick);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {if(validateNewsMutation.isSuccess) setOpen(false)}, [validateNewsMutation.isSuccess])

    const onLoginPress = (e) =>{
        e.preventDefault()
        if(!username){
            setUsernameError("Please enter a title");
        } else if(!password){
            setPasswordError("Please enter a text");
            setUsernameError(null);
        } else {
            const news = {
                title: username,
                text: password
            }
            setUsernameError(null);
            setPasswordError(null);
            validateNewsMutation.mutate(news);
        }
    }

    const onClear = () => {
        setUsername('')
        setPassword('')
    }

    console.log("SOME", validateNewsMutation.data)

    return (
        <Paper elevation={0} style={{width: '50%', margin: '0 auto', marginTop: '5em'}}>
            <Typography variant="h5" align='center' style={{marginBottom: '20px'}}>Lie detector test for news</Typography>
            <form className={classes.form} onSubmit={onLoginPress}>
                <FormControl className={classes.inputStyle}>
                    <FormLabel htmlFor="standard-basic">Title</FormLabel>
                    <Input
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
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button type='submit' className={classes.btn} variant="contained" color="primary">
                        {validateNewsMutation.isLoading ? <CircularProgress style={{color: 'white', borderColor: 'white'}} size={20}/> : 'Test'}
                    </Button>
                    <Button className={classes.btn} variant="contained" color="secondary" onClick={onClear} style={{marginLeft: '12px'}}>
                        Clear
                    </Button>
                </div>
            </form>
            <Snackbar open={snackbarTrueOpen} autoHideDuration={4000} onClose={handleSnackbarTrueClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="success">
                    We can trust this news
                </Alert>
            </Snackbar>
            <Snackbar open={snackbarFalseOpen} autoHideDuration={4000} onClose={handleSnackbarFalseClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={handleClose} severity="error">
                    Oops.. You're spreading false news
                </Alert>
            </Snackbar>
        </Paper>
    );
}

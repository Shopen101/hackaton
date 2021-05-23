import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import { api } from '../config';
import logo4 from '../assets/logo4.png'
import { SnackCenter } from '../components'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function SignIn() {
    const history = useHistory()
    const login = useSelector(({ user }) => user.login)
    const [isErr, setIsErr] = useState(false)

    const [snackErrTxt, setSnackErrTxt] = useState('')

    const [emailErr, setEmailErr] = useState(false)
    const [passErr, setPassErr] = useState(false)

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    // конфиг апи для аксиоса
    // api.interceptors.request.use(
    //     config => {
    //         config.headers.authorization = `Bearer 12345`
    //         return config
    //     },
    //     error => {
    //         return Promise.reject(error)
    //     }
    // )

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
        event.target.name === 'email' && event.target.value.length < 2 ? setEmailErr(true) : setEmailErr(false)
        event.target.name === 'password' && event.target.value.length < 8 ? setPassErr(true) : setPassErr(false)
    }

    const authHandler = async () => {
        try {
            setSnackErrTxt('')
            await api.post('account/login', { ...form })
                .then((response) => {
                    const { accessToken, refreshToken, firstName, id } = response.data
                    return login(accessToken, refreshToken, firstName, id)
                })
            history.push('/Main')
        } catch (err) {
            setSnackErrTxt('проверьте правильность введённых данных')
            setIsErr(true)
            // setSnackErrTxt(err.response.data.message)
        }

    }

    const classes = useStyles();

    const handleKeyPress = e => e.key === 'Enter' && authHandler()

    return (
        <Container component="main" maxWidth="xs">
            <SnackCenter
                openCenterSnack={isErr}
                message={snackErrTxt}
                setOpenCenterSnack={setIsErr}
                typeSnack={'error'}
            />
            <CssBaseline />
            <div className={classes.paper}>
                <img className="auth__ava" src={logo4} alt="logo" />
                <Typography component="h1" variant="h5">
                    Войти в аккаунт
                </Typography>
                {/* {snackErrTxt && <SnackBar messageErr={snackErrTxt} />} */}
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email адрес"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={changeHandler}
                        error={emailErr}
                        helperText={emailErr && 'минимальная длнна 2 символа!'}
                        onKeyPress={handleKeyPress}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={changeHandler}
                        error={passErr}
                        helperText={passErr && 'минимальная длнна 8 символов!'}
                        onKeyPress={handleKeyPress}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={authHandler}
                    >
                        Войти</Button>
                    <Grid container>
                        <Link className="linkFix" to="/signup" variant="body2">
                            {"Ещё нет аккаунта? Зарегистрируйтесь"}
                        </Link>
                        <Link to="/main" className="ml">Главная</Link>
                    </Grid>
                </form>
            </div>
            <Box mt={2}>
                <Copyright />
            </Box>
        </Container>
    );
}
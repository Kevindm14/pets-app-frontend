import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" to="/dashboard">
                New Best Friend
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://i.imgur.com/vuo6LyA.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(2, 8),
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
    formControl: {
        margin: '1em 0',
        minWidth: '100%',
    },
}));

const FormRegister = ({ signup }) => {
    const classes = useStyles();
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        age: '',
        country: 'Colombia',
        province: '',
        email: '',
        password: '',
        passsword_digest: ''
    })

    function handleInputChange(e){
        setUser ({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try{
          await signup(user);
        }catch(error){
            console.log(error);
        }
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Registrate
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="first_name"
                            label="Nombres"
                            name="first_name"
                            autoComplete="first_name"
                            autoFocus
                            onChange={handleInputChange} 
                            value={user.first_name}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="lastName"
                            label="Apellidos"
                            name="last_name"
                            autoComplete="last_name"
                            autoFocus
                            onChange={handleInputChange} 
                            value={user.last_name}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="age"
                            label="Edad"
                            name="age"
                            autoComplete="age"
                            autoFocus
                            onChange={handleInputChange} 
                            value={user.age}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="country"
                            label="Pais"
                            name="country"
                            autoComplete="country"
                            autoFocus
                            disabled={true}
                            onChange={handleInputChange} 
                            value={user.country}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="province"
                            label="Provincia"
                            name="province"
                            autoComplete="province"
                            autoFocus
                            onChange={handleInputChange} 
                            value={user.province}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Correo Electronico"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleInputChange} 
                            value={user.email}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleInputChange} 
                            value={user.passsword}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="passsword_digest"
                            label="Contraseña"
                            type="password"
                            id="passsword_digest"
                            autoComplete="current-password"
                            onChange={handleInputChange} 
                            value={user.passsword_digest}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Registrarse
                        </Button>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link to="/login" variant="body2">
                                    {"Ya estas registrado? Inicia sesion"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
};

export default FormRegister;
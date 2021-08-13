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
import useStyles from './styles';

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

const FormLogin = (props) => {
  const { login } = props;
  const classes = useStyles();
  const [error, setError] = useState();
  const [hash, setHash] = useState({
    email: '',
    password: ''
  })

  const clearState = () => {
    setHash({
      email: '',
      password: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(hash.email, hash.password)
    } catch (error) {
      clearState()
      setError(error.response.data);
      
      console.log(error);
    }
  }

  const handleInputChange = (e) => {
    setHash({
      ...hash,
      [e.target.name]: e.target.value
    });
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
            Inicia Sesión
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>

            {
              error && error.errors && Array.isArray(error.errors) && 
              (
                <p className={classes.error}>Correo electronico o contraseña incorrectos</p>
              )
            }
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              type="email"
              name="email"
              autoComplete="email"
              autoFocus
              value={hash.email}
              onChange={handleInputChange}
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
              value={hash.password}
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Inicia sesión
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"No tienes una cuenta aun? Registrate"}
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

export default FormLogin;
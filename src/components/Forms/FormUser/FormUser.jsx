import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import Nav from "../../Nav/Nav";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  sidebar: {
    display: 'flex',
    justifyContent: 'center',
    color: '#616161',
    alignItems: 'center',
    flexDirection: 'column',
    margin: theme.spacing(4, 0),
    padding: theme.spacing(4),
    border: '1px solid #C5C5CA',
    borderRadius: '5px'
  },
  subSidebar: {
    display: 'flex',
    justifyContent: 'center',
    color: '#616161',
    flexDirection: 'column',
    margin: theme.spacing(4, 0),
    padding: theme.spacing(4),
    border: '1px solid #C5C5CA',
    borderRadius: '5px'
  },
  image: {
    width: '100px',
    padding: '.5em',
    borderRadius: '50%',
    border: '1px solid #E0E0E0',
    marginBottom: '2em'
  },
  data: {

    color: '#616161',
    margin: theme.spacing(4, 2),
    padding: theme.spacing(4),
    border: '1px solid #C5C5CA',
    borderRadius: '5px',
    width: '74%'
  },
  location: {
    margin: '2em 0'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const FormUser = ({ logout, usuario }) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Nav logout={logout} usuario={usuario} />

      <main className={classes.root}>

        <Container className={classes.cardGrid} maxWidth="lg">

          <Grid container justifyContent="flex-start">
            <div className={classes.sidebar}>

              <img src="https://img.miwuki.com/no_pic" alt="perfil" className={classes.image} />

              <p>{usuario.data.first_name}</p>
              <p>{usuario.data.email}</p>
              <p>{usuario.data.province}, {usuario.data.country}</p>

              <img src="https://www.countryflags.io/co/flat/24.png" alt="colombia" />

              <div className={classes.subSidebar}>
                <p>Casos en adopcion: {usuario.data.total_pets}</p>
                <p>Favoritos: 0</p>
                <p>Mascotas adoptadas: 0</p>
              </div>

              <Button
                variant="contained"
                color="primary"
                onClick={logout}
              >
                Cerrar sesión
              </Button>

            </div>

            <Grid container className={classes.data} direction="column">
              <Grid item>
                1. Datos
              </Grid>

              <Grid container spacing={10}>
                <Grid item xs={4}>
                  <p>Nombre</p>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="first_name"
                    value={usuario.data.first_name}

                  />
                </Grid>
                <Grid item xs={4}>
                  <p>Apellidos</p>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="last_name"
                    value={usuario.data.last_name}

                  />
                </Grid>
                <Grid item xs={4}>
                  <p>Edad</p>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="age"
                    value={usuario.data.age}

                  />
                </Grid>
                <Grid item xs={4}>
                  <p>Email</p>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="email"
                    value={usuario.data.email}

                  />
                </Grid>

                <Grid item xs={4}>
                  <FormLabel component="legend">Sexo</FormLabel>
                  <RadioGroup aria-label="gender" value={usuario.data.gender} name="gender" >
                    <FormControlLabel value="mujer" control={<Radio />} label="Mujer" />
                    <FormControlLabel value="hombre" control={<Radio />} label="Hombre" />
                  </RadioGroup>
                </Grid>

              </Grid>


              <Grid item className={classes.location}>
                2. Localizacion
              </Grid>

              <Grid container spacing={10}>
                <Grid item xs={4}>
                  <p>Pais</p>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="country"
                    value={usuario.data.country}
                    disabled={true}

                  />
                </Grid>

                <Grid item xs={8}>
                  <p>Provincia</p>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="province"
                    value={usuario.data.province}
                  />
                </Grid>

                <Grid item xs={4}>
                  <p>Contraseña</p>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="password_digest"
                    value={usuario.data.password_digest}
                  />
                </Grid>

                <Grid item xs={4}>
                  <p>Confirmar contraseña</p>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="password"
                    value={usuario.data.password}
                  />
                </Grid>
              </Grid>
            </Grid>

          </Grid>

          <Grid container justifyContent="flex-start">

          </Grid>

        </Container>
      </main>

      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          New Best Friend
        </Typography>

        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}

          <Link color="inherit" to="/dashboard">
            New best friend
          </Link>{' '}

          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </footer>
    </>
  )
}

export default FormUser;
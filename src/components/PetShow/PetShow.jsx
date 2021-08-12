import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import axiosClient from "../../config/axiosClient";
import { getToken } from '../../helpers/authHelper';
import { useParams } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { Link } from "react-router-dom";

import Nav from "../Nav/Nav";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  topLevel: {
    display: 'flex',
    alignItems: 'center'
  },
  perfil: {
    width: '300px',
    borderRadius: '5px',
  },
  info: {
    margin: theme.spacing(5, 0)
  },
  infoPet: {
    margin: theme.spacing(0, 5),
    padding: theme.spacing(2, 3),
    border: '1px solid #BDBDBD',
    borderRadius: '5px',
    width: '350px'
  },
  dataInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(1, 0)
  },
  description: {
    height: '250px',
    padding: theme.spacing(2, 3),
    borderRadius: '5px',
    width: '100%',
    border: '1px solid #BDBDBD',
  }
}));

const PetShow = ({ logout, usuario }) => {
  const classes = useStyles();
  const [pet, setPet] = useState({})
  const { id } = useParams();

  useEffect(() => {
    const loadPet = async () => {
      try {
        const { data } = await axiosClient.get(`http://localhost:3000/pets/${id}`, {
          headers: { 'Authorization': getToken() }
        });

        setPet(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadPet();
  }, [])

  const updateStatePet = async () => {
    try {
      const { data } = await axiosClient.put(`http://localhost:3000/pets/${id}/update_status`, pet, {
        headers: { 'Authorization': getToken() }
      });

      setPet(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <CssBaseline />
      <Nav logout={logout} usuario={usuario} />
      <main>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container justifyContent="space-between">
            <div className={classes.topLevel}>
              <Typography gutterBottom variant="h5" component="h2" style={{ marginRight: '1em' }}>
                {pet.name}
              </Typography>

              <Chip label={pet.status} />

              <Typography gutterBottom variant="h8" component="h4" style={{ margin: '0 1em' }}>
                - {pet.country}, {pet.province}
              </Typography>
              <img src="https://www.countryflags.io/co/flat/24.png" alt="colombia" />
            </div>

            <div>
              <Link
                component={Button}
                variant="contained"
                color="primary"
                onClick={updateStatePet}
                disabled={pet.status === 'Adoptado'}
              >
                Quiero Adoptarlo
              </Link>
            </div>

          </Grid>

          <Grid container justifyContent="flex-start" className={classes.info}>
            <img src={pet.perfil_photo} alt={pet.name} className={classes.perfil} />
            <div className={classes.infoPet}>
              <Typography gutterBottom variant="h8" component="h4" style={{ margin: '1em 0' }}>
                Mis datos
              </Typography>

              <div className={classes.dataInfo}>
                <span>Especie</span>
                <Typography gutterBottom variant="h8" component="h9" >
                  {pet.species}
                </Typography>
              </div>

              <div className={classes.dataInfo}>
                <span>Fecha nacimiento</span>
                <Typography gutterBottom variant="h8" component="h9" >
                  { }
                </Typography>
              </div>

              <div className={classes.dataInfo}>
                <span>Sexo</span>
                <Typography gutterBottom variant="h8" component="h9" >
                  {pet.gender}
                </Typography>
              </div>

              <div className={classes.dataInfo}>
                <span>Tamaño</span>
                <Typography gutterBottom variant="h8" component="h9" >
                  {pet.size}
                </Typography>
              </div>

              <div className={classes.dataInfo}>
                <span>Peso</span>
                <Typography gutterBottom variant="h8" component="h9" >
                  {pet.weigth}
                </Typography>
              </div>

              <div className={classes.dataInfo}>
                <span>Razon de adopcion</span>
                <Typography gutterBottom variant="h8" component="h9" >
                  {pet.reason}
                </Typography>
              </div>

            </div>
          </Grid>

          <Grid container justifyContent="flex-start" className={classes.info}>
            <div className={classes.description}>
              <Typography gutterBottom variant="h5" component="h2">
                Mi historia:
              </Typography>
              <p>{pet.description}</p>
            </div>
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

export default PetShow;
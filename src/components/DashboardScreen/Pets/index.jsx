import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import axiosClient from "../../../config/axiosClient";
import { getToken } from '../../../helpers/authHelper';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

import Nav from "../../Nav/Nav";
import Footer from "../../Footer/Footer";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  shape: {
    backgroundColor: theme.palette.primary.main,
    width: 40,
    height: 40,
  },
  description: {
    margin: '1em 0'
  }
}));

const DashboardScreen = (props) => {
  const classes = useStyles();
  const { usuario, logout } = props;
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const loading = async () => {
      try {
        const { data } = await axiosClient.get('https://warm-tundra-35134.herokuapp.com/pets', {
          headers: { 'Authorization': getToken() }
        });

        setPets(data);
      } catch (error) {
        console.log(error);
      }
    }
    loading();
  }, [])

  return (
    <>
      <CssBaseline />
      <Nav logout={logout} usuario={usuario} />
      <main>
        <Container className={classes.cardGrid}>
          <Grid container spacing={4} >
            {
              pets.length ?
                pets.map((pet) => (
                  <Grid item key={pet.id} xs={12} sm={6} md={3}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={pet.perfil_photo}
                        title={pet.name}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h7" component="h7">
                          {pet.name}
                        </Typography>

                        <Chip
                          label={pet.status}
                          style={{
                            backgroundColor: pet.status === 'Adoptado' ? '#F44336' : '#8CC24A',
                            color: 'white'
                          }}
                        />

                      </CardContent>
                      <CardActions>
                        <Link component={Button} to={`/pets/${pet.id}`} size="small" color="primary">
                          Mostrar
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>
                )) :
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{ minHeight: '650px' }}
                >
                  <HourglassEmptyIcon />

                  <Typography variant="h6" align="center" gutterBottom>
                    No hay mascotas agregadas.
                  </Typography>

                  <Link
                    component={Button}
                    variant="contained"
                    color="primary"
                    to="/pets/new"
                  >
                    Agregar una mascota
                  </Link>

                </Grid>
            }
          </Grid>
        </Container>
      </main>

      <Footer />

    </>
  )
}

export default DashboardScreen;
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import PetsIcon from '@material-ui/icons/Pets';

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: '10rem',
    color: '#4DB8C0'
  },
  footer: {
    backgroundColor: '#292E34',
    padding: theme.spacing(6),
  },
  footer1: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer2: {
    backgroundColor: '#1B1D22',
    padding: theme.spacing(2),
    color: 'white'
  },
  title: {
    
  },
  description: {
    width: '50%',
    color: 'white'

  },
  button: {
    color: '#4DB8C0'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Container maxWidth="lg" className={classes.footer1}>
        <div className={classes.description}>
        <Typography variant="h6" className={classes.title} color="primary" gutterBottom>
          New Best Friend
        </Typography>
        <p>En Miwuki podrás encontrar cientos de perros, cachorros,
          gatos, gatitos, hurones, conejos, cobayas, ratas, ratones, chinchillas, jerbos,
          cerdos reptiles, aves... en adopción procedentes de protectoras y asociaciones de animales o perreras de todo el mundo.
          ¿Estás buscando adoptar o acoger un animal? ¡Estás en el sitio adecuado! Adopta, salva una vida y gana un amigo con Miwuki Pet Shelter.</p>
        </div>
        <PetsIcon className={classes.icon} />
        </Container>
      </footer>
      <footer className={classes.footer2}>
      <Container maxWidth="lg">
      <Typography variant="body2" align="center">
          {'Copyright © '}
          <Link to="/dashboard" className={classes.button}>
            New best friend
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
      </footer>
    </>
  );
};

export default Footer;
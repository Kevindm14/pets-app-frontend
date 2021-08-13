import React, { useState, useEffect } from 'react';
import axiosClient from "../../../config/axiosClient";
import { getToken } from '../../../helpers/authHelper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Nav from "../../Nav/Nav"
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useHistory } from "react-router-dom";
import Footer from '../../Footer/Footer';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/dashboard">
        New best friend
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    flexGrow: 1,
  },
  margin: {
    marginTop: '4em'
  },
  form: {
    border: '1px solid #E0E0E0',
    boxShadow: '6px 6px 19px -8px rgba(0,0,0,0.75)',
    borderRadius: '7px',
    padding: '2em 4em',
    marginTop: '5em',
    marginBottom: '5em'
  },
  description: {
    width: '100%',
    marginBottom: '2em'
  },
  location: {
    margin: '2em 0'
  },
  button: {
    color: 'white'
  },
  error: {
    color: 'red'
  }
}));

const FormPet = (props) => {
  const { usuario, logout } = props;
  const classes = useStyles();
  const history = useHistory();
  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
  const [error, setError] = useState()
  const [pet, setPet] = useState({
    name: '',
    species: '',
    status: '',
    gender: '',
    age: '',
    weigth: '',
    description: '',
    reason: '',
    country: 'Colombia',
    province: '',
    contact_phone: '',
    perfil_photo: '',
  })

  useEffect(() => {
    const selectedFiles = () => {
      if (selectedDate) {
        setPet({
          ...pet,
          day_of_birth: selectedDate
        })
      }
    };

    selectedFiles();
  }, [selectedDate])


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleInputChange = (e) => {
    setPet({
      ...pet,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmitPet = async (e) => {
    e.preventDefault();

    try {
      await axiosClient.post('https://warm-tundra-35134.herokuapp.com/pets', pet, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': getToken(),
        }
      });

      history.replace("/pets")
    } catch (err) {
      setError(err.response.data)
      console.error(err);
    }
  }

  console.log(error)

  return (
    <>
      <CssBaseline />
      <Nav logout={logout} usuario={usuario} />
      <main>
        <Container maxWidth="lg" className={classes.margin}>
          <Typography variant="h6" gutterBottom>
            Dar en Adopción
          </Typography>
        </Container>
        <Container maxWidth="lg">
          <form className={classes.form} onSubmit={handleSubmitPet}>
            <Typography variant="h6" gutterBottom color="primary">
              1. Datos
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Nombre"
                  variant="outlined"
                  name="name"
                  value={pet.name}
                  onChange={handleInputChange}
                  error={error && error.name && Array.isArray(error.name)}
                  helperText={error && error.name && Array.isArray(error.name) && (error.name[0])}
                />
                
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Especie"
                  variant="outlined"
                  name="species"
                  value={pet.species}
                  onChange={handleInputChange}
                  error={error && error.species && Array.isArray(error.species)}
                  helperText={error && error.species && Array.isArray(error.species) && (error.species[0])}
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Estado"
                  variant="outlined"
                  name="status"
                  value={pet.status}
                  onChange={handleInputChange}
                  error={error && error.status && Array.isArray(error.status)}
                  helperText={error && error.status && Array.isArray(error.status) && (error.status[0])}
                />
              </Grid>
              <Grid item xs={3}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" value={pet.gender} name="gender" onChange={handleInputChange}>
                  <FormControlLabel value="hembra" control={<Radio />} label="Hembra" />
                  <FormControlLabel value="macho" control={<Radio />} label="Macho" />
                </RadioGroup>
                {error && error.gender && Array.isArray(error.gender) && (<p className={classes.error}>{error.gender[0]}</p>)}
              </Grid>

              <Grid item xs={9}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Fecha de nacimiento"
                    value={selectedDate}
                    onChange={handleDateChange}

                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>

              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Edad"
                  variant="outlined"
                  name="age"
                  value={pet.age}
                  onChange={handleInputChange}
                  error={error && error.age && Array.isArray(error.age)}
                  helperText={error && error.age && Array.isArray(error.age) && (error.age[0])}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Peso"
                  variant="outlined"
                  name="weigth"
                  value={pet.weigth}
                  onChange={handleInputChange}
                  error={error && error.weigth && Array.isArray(error.weigth)}
                  helperText={error && error.weigth && Array.isArray(error.weigth) && (error.weigth[0])}
                />
              </Grid>

              <Grid item xs={12}>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={12}
                  className={classes.description}
                  placeholder="Descripcion de la mascota"
                  name="description"
                  value={pet.description}
                  onChange={handleInputChange}
                  error={error && error.description && Array.isArray(error.description)}
                  helperText={error && error.description && Array.isArray(error.description) && (error.description[0])}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Motivo Adopcion"
                  variant="outlined"
                  name="reason"
                  value={pet.reason}
                  onChange={handleInputChange}
                  error={error && error.reason && Array.isArray(error.reason)}
                  helperText={error && error.reason && Array.isArray(error.reason) && (error.reason[0])}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom color="primary" className={classes.location}>
                  2. Localizacion
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Pais"
                  variant="outlined"
                  name="country"
                  value={pet.country}
                  disabled={true}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Provincia"
                  variant="outlined"
                  name="province"
                  value={pet.province}
                  onChange={handleInputChange}
                  error={error && error.province && Array.isArray(error.province)}
                  helperText={error && error.province && Array.isArray(error.province) && (error.province[0])}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  error={error && error.contact_phone && Array.isArray(error.contact_phone)}
                  id="outlined-error-helper-text"
                  label="Telefono de contacto"
                  name="contact_phone"
                  value={pet.contact_phone}
                  onChange={handleInputChange}
                  variant="outlined"
                  helperText={error && error.contact_phone && Array.isArray(error.contact_phone) && (error.contact_phone[0])}
                />
                
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom color="primary" className={classes.location}>
                  3. Foto de perfil
                </Typography>

                <TextField
                  id="outlined-basic"
                  label="Foto de perfil"
                  variant="outlined"
                  name="perfil_photo"
                  value={pet.perfil_photo}
                  onChange={handleInputChange}
                />

                {/* <Button
                  variant="contained"
                  component="label"
                >
                  Subir imagen
                  <input
                    type="file"
                    name="perfil_photo"
                    hidden
                    onChange={handleSelectedFile}
                  />
                </Button> */}
              </Grid>
              {/* {
                selectedFile && 
                (<Grid item xs={3}>
                  <img src={preview} alt={selectedFile.name} />
                </Grid>)
              } */}
            </Grid>
            <Grid container justifyContent="flex-end">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
              >
                Guardar mascota
              </Button>
            </Grid>
          </form>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default FormPet;
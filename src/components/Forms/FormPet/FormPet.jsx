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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  margin: {
    marginTop: '4em'
  },
  form: {
    border: '1px solid #E0E0E0',
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
  }
}));

const FormPet = (props) => {
  const classes = useStyles();
  const history = useHistory();
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [preview, setPreview] = useState();
  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
  const { usuario, logout } = props;
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

  // const selectedFiles = () => {
  //   if (selectedFile) {
  //     setPet({
  //       ...pet,
  //       perfil_photo: selectedFile
  //     })
  //   }
  // };

  useEffect(() => {
    // if (!selectedFile) {
    //   setPreview(undefined)
    //   return
    // }
    
    const selectedFiles = () => {
      if (selectedDate) {
        setPet({
          ...pet,
          day_of_birth: selectedDate
        })
      }
    };

    // const objectUrl = URL.createObjectURL(selectedFile)
    // setPreview(objectUrl)

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
      await axiosClient.post('http://localhost:3000/pets', pet, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': getToken(),
        }
      });

      history.replace("/pets")

    } catch (error) {
      console.error(error);
    }
  }

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
            <Typography variant="h6" gutterBottom>
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
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Especie"
                  variant="outlined"
                  name="species"
                  value={pet.specie}
                  onChange={handleInputChange}
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
                />
              </Grid>
              <Grid item xs={3}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" value={pet.gender} name="gender" onChange={handleInputChange}>
                  <FormControlLabel value="hembra" control={<Radio />} label="Hembra" />
                  <FormControlLabel value="macho" control={<Radio />} label="Macho" />
                </RadioGroup>
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
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom className={classes.location}>
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
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  id="outlined-basic"
                  label="Telefono de contacto"
                  variant="outlined"
                  name="contact_phone"
                  value={pet.contact_phone}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom className={classes.location}>
                  2. Foto de perfil
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
              >
                Guardar mascota
              </Button>
            </Grid>
          </form>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          New Best Friend
        </Typography>
        <Copyright />
      </footer>
    </>
  )
}

export default FormPet;
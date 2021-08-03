import Image from "./assets/img/perros.jpg"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";
import Card from "./components/MediaCard";
const dogs = require('./dogs.js')

const useStyles = makeStyles(() => ({
  paperContainer: {
    padding: '3em',
    display: 'flex',
    justifyContent: 'flex-end',
    height: '700px',
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:  '100% 700px',
  },
  title: {
    color: 'white',
    fontSize: '10em',
    textAlign: 'center'
  },
  buttons: {
    color: 'white',
    marginRight: '10px'
  },
  yellow: {
    backgroundColor: '#F0B977',
    padding: '3em'
  },
  subtitle: {
    fontSize: '3em',
    color: 'white',
    marginTop: 0,
    textAlign: 'center'
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.paperContainer}>

        <Grid container direction="column">

          <Grid container direction="row" justifyContent="flex-end" alignItems="center">
            <Button className={classes.buttons} color="inherit">Login</Button>
            <Button className={classes.buttons} color="inherit">Register</Button>
          </Grid>

          <Grid>
            <h2 className={classes.title}>New Best Friend</h2>
          </Grid>

        </Grid>

      </div>

      <div className={classes.yellow}>
        <h2 className={classes.subtitle}>Adoptame</h2>

        <Grid container direction="row" justifyContent="space-between">
        {
          dogs.data.map((e, i) => (
            <Card dog={e} key={i}></Card>
          ))
        }
        </Grid>
      </div>
    </>
  );
}

export default App;

import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";
import Card from "./components/Cards/MediaCard";
import Image from "./assets/img/perros.jpg"
const dogs = require('./dogs.js');

const useStyles = makeStyles(() => ({
	paperContainer: {
		padding: '2em',
		display: 'flex',
		justifyContent: 'flex-end',
		height: '700px',
		backgroundImage: `url(${Image})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: '100% 700px',
	},
	title: {
		color: 'white',
		fontSize: '8em',
		textAlign: 'center',
		marginTop: '1em'
	},
	buttons: {
		color: 'white',
		marginRight: '10px',
	},
	yellow: {
		backgroundColor: '#F0B977',
		padding: '10rem 10em'
	},
	subtitle: {
		fontSize: '3em',
		color: 'white',
		marginTop: 0,
		marginBottom: '3em',
		textAlign: 'center'
	},
	info: {
		display: 'flex',
		justifyContent: 'flex-end',
		padding: '10rem 10em',
		height: '900px',
		backgroundImage: `url(https://i.imgur.com/4jlzwSE.jpg)`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: '100% 900px',
	},
	infoTitle: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: '3em'
	},
	circle: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		backgroundColor: '#F0B977',
		width: '50%',
		borderRadius: '100%',
		height: '100%',
		boxShadow: '6px 6px 19px -8px rgba(0,0,0,0.75)',
	},
	descriptionInfo: {
		width: '400px',
		fontSize: '1.3em'
	},
	imgCat: {
		width: '450px',
		borderRadius: '100%',
		boxShadow: '6px 6px 19px -8px rgba(0,0,0,0.75)',
	}
}));


function App() {
	const classes = useStyles();

	return (
		<>
			<div className={classes.paperContainer}>

				<Grid container direction="column">

					<Grid container direction="row" justifyContent="flex-end" alignItems="center">
						<Link className={classes.buttons} color="inherit" to="/login" component={Button}>Iniciar Sesion</Link>
						<Link className={classes.buttons} color="inherit" to="/signup" component={Button}>Registrarse</Link>
					</Grid>

					<Grid>
						<Typography variant="h2" className={classes.title}>
							New <br /> Best Friend
						</Typography>
					</Grid>

				</Grid>

			</div>

			<div className={classes.yellow}>
				<Grid container direction="column" justifyContent="space-between">
					{
						dogs.data.map((e, i) => (
							<Card dog={e} key={i}></Card>
						))
					}
				</Grid>
			</div>

			<div className={classes.info}>
				<div className={classes.circle}>
					<Typography variant="h2" className={classes.infoTitle}>
						Conocenos
					</Typography>

					<p className={classes.descriptionInfo}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam iusto e
						xercitationem repudiandae aspernatur quasi veritatis, nobis vel, ab deleniti
						doloremque eaque mollitia provident. Deserunt sequi tempore, porro repudiandae sunt numquam?
					</p>
				</div>
			</div>

			<div className={classes.yellow}>
				<Grid container direction="row" justifyContent="space-between">
					<div>
						<Typography variant="h2" className={classes.infoTitle}>
							Encuentranos
						</Typography>

						<List>
							<ListItem>
								<ListItemText className={classes.listItem}
									primary="Ciudad"
									secondary="Barranquilla, Colombia"
								/>
							</ListItem>

							<ListItem>
								<ListItemText className={classes.listItem}
									primary="Direccion"
									secondary="Carrera 100 #54-58"
								/>
							</ListItem>

							<ListItem>
								<ListItemText className={classes.listItem}
									primary="Telefono"
									secondary="301-587-3445"
								/>
							</ListItem>

							<ListItem>
								<ListItemText className={classes.listItem}
									primary="Correo"
									secondary="Newbestfriend@gmail.com"
								/>
							</ListItem>
						</List>
					</div>

					<img src="https://i.imgur.com/dUmvIHL.jpg" alt="cat" className={classes.imgCat} />
				</Grid>
			</div>
		</>
	);
}

export default App;

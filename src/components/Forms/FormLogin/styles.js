import { makeStyles } from "@material-ui/core/styles";

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
		margin: theme.spacing(20, 8),
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
	error: {
		color: 'red',
		textAlign: 'center'
	}
}));

export default useStyles;
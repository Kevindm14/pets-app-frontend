import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
	card: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: '4em',

		'&:nth-child(2)': {
			flexDirection: 'row-reverse',
			BorderBottom: '1px solid black'
		}
	},
	image: {
		width: '350px',
		borderRadius: '150px',
		border: '1px solid white',
		boxShadow: '6px 6px 19px -8px rgba(0,0,0,0.75)',
	},
	description: {
		fontSize: '18px',
		width: '45rem',
	}
});

const MediaCard = ({ dog }) => {
	const classes = useStyles();

	return (
		<div className={classes.card}>
			<img src={dog.photo} alt={dog.name} className={classes.image} />

			<div className={classes.description}>
				<Typography variant="h4" className={classes.title}>
					{dog.name}
				</Typography>

				<p>{dog.description}</p>
			</div>
		</div>
	);
}

export default MediaCard;
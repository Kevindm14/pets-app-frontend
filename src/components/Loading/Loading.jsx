import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  loading: {
    margin: '0 auto',
    width: '70px',
    textAlign: 'center',

    '& > div': {
      width: '18px',
      height: '18px',
      backgroundColor: '#333',
      borderRadius: '100%',
      display: 'inline-block',
      animation: 'sk-bouncedelay 1.4s ease-in-out infinite both',
    }
  },
  Loading__dot_1: {
    animationDelay: '-0.32s',
  },
  Loading__dot_2: {
    animationDelay: '-0.16s',
  },
}));

export default function Loading(){
  const classes = useStyles();

    return (
        <div className={classes.Loading}>
            <div className={classes.Loading__dot_1}></div>
            <div className={classes.Loading__dot_2}></div>
            <div className={classes.Loading__dot_3}></div>
        </div>
    );
}
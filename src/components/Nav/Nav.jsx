import React, { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import PetsIcon from '@material-ui/icons/Pets';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white'
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
  perfil: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    color: 'white',
    fontWeight: 'bolder'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const Nav = ({ logout, usuario }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="relative" color="primary" className={classes.root}>
        <Toolbar>
          <Container maxWidth="lg">
            <Grid container justifyContent="space-between" alignItems="center">
              <div className={classes.perfil}>
                <PetsIcon className={classes.icon} />
                <Typography variant="h6" color="inherit" noWrap>
                  New Best Friend
                </Typography>
              </div>
              <div className={classes.perfil}>
                <Button aria-controls="simple-menu" className={classes.button} aria-haspopup="true" onClick={handleClick}>
                  Hola, {usuario.data.first_name} <AccountCircleIcon className={classes.icon} />
                </Button>
                
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </Menu>
              </div>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>

      <AppBar position="relative" color="secondary" className={classes.root}>
        <Toolbar>
          <Container maxWidth="lg">
            <Grid container justifyContent="space-between" alignItems="center">
              <div className={classes.perfil}>
                <Link component={Button} variant="text" to="/pets" className={classes.button}>Inicio</Link>
                <Link component={Button} variant="text" to="/pets/new" className={classes.button}>Dar en adopcion</Link>
                <Link component={Button} variant="text" to={`/perfil/${usuario.data.id}`} className={classes.button}>Perfil</Link>
              </div>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  )
};

export default Nav;
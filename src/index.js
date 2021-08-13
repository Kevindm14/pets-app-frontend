import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./assets/js/themeUI";
import './index.css';
import AppRouter from './components/Routes/AppRouter';


ReactDOM.render(
	
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<AppRouter />
	</ThemeProvider>,
	
	document.getElementById('root')
);

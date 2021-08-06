import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./assets/js/themeUI";
import App from "./App";
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from './components/Forms/FormLogin'
import RegisterScreen from './components/Forms/FormRegister'


ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Switch>
					{/* <PublicRoute exact path="/signup" component={SignupScreen} isAuthenticated={logged} />
					<PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={logged} />
					<PublicRoute exact path="/reset_password" component={ResetPasswordScreen} isAuthenticated={logged} /> */}
					<Route exact path="/dashboard" component={App} />
					<Route exact path="/login" component={LoginScreen} />
					<Route exact path="/signup" component={RegisterScreen} />
				</Switch>
			</Router>

			
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

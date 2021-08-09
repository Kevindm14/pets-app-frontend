import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardContainer from "../../App";
import {setToken, deleteToken, getToken, initAxiosInterceptors} from '../../helpers/authHelper';
import axiosClient from "../../config/axiosClient";
import DashboardScreen from '../DashboardScreen/Pets'
import PublicRoute from "../PublicRoutes";
import FormLogin from "../Forms/FormLogin/FormLogin";
import FormRegister from "../Forms/FormRegister/FormRegister";
import PrivateRoute from "../PrivateRoute";

initAxiosInterceptors();

const AppRouter = () => {
	const [usuario, setUsuario] = useState(null); 
	const [cargandoUsuario, setCargandoUsuario] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const isLogged = getToken() ? true : false

	useEffect(() => {
    async function cargarUsuario(){
      if(!getToken()){
        setCargandoUsuario(false);
        return;
      }
      
      try{
        const data = await axiosClient.get('http://localhost:3000/users/profile', {
          headers: {'Authorization': getToken()}
        });
        
        setUsuario(data);
        setCargandoUsuario(false);
      }catch(error){
        console.log(error);
      }
    }
    cargarUsuario();
  }, []);

	async function login(email, password) {
		const { data } = await axiosClient.post('http://localhost:3000/users/sign_in', {
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      user: {
        email,
        password,
      },
		});

		setUsuario(data);
		setToken(data.access_token);

    window.location = "/pets"
	}

  async function signup(user){
    const { data } = await axiosClient.post('http://localhost:3000/users/sign_up', {
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      user
    });

    setUsuario(data);
    setToken(data.access_token);

    window.location = "/pets"
  }

	async function logout() {
    setUsuario(null);
    deleteToken();
  }

	if(cargandoUsuario){
    return(
      <div>
        Cargando
      </div>
    )
  }

	return (
		<Router>
			<Switch>
        <PublicRoute exact path="/login" component={FormLogin} login={login} isAuthenticated={isLogged} />
        <PublicRoute exact path="/signup" component={FormRegister} signup={signup} isAuthenticated={isLogged} />
        <PrivateRoute exact path="/pets" component={DashboardScreen} usuario={usuario} logout={logout} isLogged={isLogged} />

				<Route path="/" component={DashboardContainer} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
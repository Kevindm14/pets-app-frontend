import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardContainer from "../../App";
import { setToken, deleteToken, getToken, initAxiosInterceptors } from '../../helpers/authHelper';
import axiosClient from "../../config/axiosClient";
import DashboardScreen from '../DashboardScreen/Pets'
import PublicRoute from "../PublicRoutes";
import FormLogin from "../Forms/FormLogin/FormLogin";
import FormRegister from "../Forms/FormRegister/FormRegister";
import FormPet from "../Forms/FormPet/FormPet";
import PrivateRoute from "../PrivateRoute";
import Loading from '../Loading/Loading';
import PetShow from "../PetShow/PetShow";
import FormUser from "../Forms/FormUser/FormUser";

initAxiosInterceptors();

const AppRouter = () => {
  const [usuario, setUsuario] = useState(null);
  const [loadingUser, setloadingUser] = useState(true);
  const isLogged = getToken() ? true : false

  useEffect(() => {
    async function cargarUsuario() {
      if (!getToken()) {
        setloadingUser(false);
        return;
      }

      try {
        const data = await axiosClient.get('http://localhost:3000/users/profile', {
          headers: { 'Authorization': getToken() }
        });

        setUsuario(data);
        setloadingUser(false);
      } catch (error) {
        console.log(error);
      }
    }
    cargarUsuario();
  }, []);

  console.log(usuario)

  async function login(email, password) {
    const { data } = await axiosClient.post('http://localhost:3000/users/sign_in', {
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      user: {
        email,
        password,
      },
    });

    setUsuario(data);
    setToken(data.access_token);

    window.location = "/pets"
  }

  async function signup(user) {
    const { data } = await axiosClient.post('http://localhost:3000/users/sign_up', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      user
    });

    setUsuario(data);
    setToken(data.access_token);

    window.location = "/pets"
  }

  function logout() {
    setUsuario(null);
    deleteToken();
  }

  if (loadingUser) {
    return (
      <div>
        cargando
      </div>
    )
  }

  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/login" component={FormLogin} login={login} isAuthenticated={isLogged} />
        <PublicRoute exact path="/signup" component={FormRegister} signup={signup} isAuthenticated={isLogged} />
        <PrivateRoute exact path="/pets" component={DashboardScreen} usuario={usuario} logout={logout} isLogged={isLogged} />
        <PrivateRoute exact path="/pets/new" component={FormPet} usuario={usuario} logout={logout} isLogged={isLogged} />
        <PrivateRoute exact path="/perfil" component={FormPet} usuario={usuario} logout={logout} isLogged={isLogged} />
        <PrivateRoute exact path="/perfil/:id" component={FormUser} usuario={usuario} logout={logout} isLogged={isLogged} />
        <PrivateRoute exact path="/pets/:id" component={PetShow} usuario={usuario}  logout={logout} isLogged={isLogged} />

        <Route path="/" component={DashboardContainer} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
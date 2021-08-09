import React from 'react';
import Button from '@material-ui/core/Button';

const DashboardScreen = (props) => {
	const { usuario, logout } = props;
	const data = usuario.data;

  return (
    <div>
        Bienvenido {data.first_name}
				<Button
        	onClick={() => logout()}
        	color="primary"
      	>
				Cerrar Sesión
				</Button>
    </div>
  )
}
 
export default DashboardScreen;
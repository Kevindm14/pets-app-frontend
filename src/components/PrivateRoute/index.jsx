import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = props => {
  const {isLogged, component: Component, ...rest} = props
  return (
    <Route {...rest}
      render={() => (
        (isLogged) 
          ? (<Component {...rest} />)
          : (<Redirect to='/login' />)
      )}
    />
  )
}

export default PrivateRoute;
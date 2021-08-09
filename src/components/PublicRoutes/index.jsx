import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = props => {
	const { isAuthenticated, component: Component, ...rest } = props

	return (
		<Route {...rest}
			render={() => (
				(!isAuthenticated)
					? (<Component {...rest} />)
					: (<Redirect to='/login' />)
			)}
		/>
	)
}

export default PublicRoute;
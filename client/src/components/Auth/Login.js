import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const Login = () => {
	return <div>Login</div>;
};

const styles = {
	root: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
		justifyContent: 'center'
	}
};

export default withStyles(styles)(Login);

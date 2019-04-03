import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const Signout = () => {
	return <div>Signout</div>;
};

const styles = {
	root: {
		cursor: 'pointer',
		display: 'flex'
	},
	buttonText: {
		color: 'orange'
	},
	buttonIcon: {
		color: 'orange',
		marginLeft: '5px'
	}
};

export default withStyles(styles)(Signout);

import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const PinContent = () => {
	return <div>PinContent</div>;
};

const styles = theme => ({
	root: {
		padding: '1em 0.5em',
		textAlign: 'center',
		width: '100%'
	},
	icon: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit
	},
	text: {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center'
	}
});

export default withStyles(styles)(PinContent);

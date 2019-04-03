import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const CreatePin = () => {
	return <div>CreatePin</div>;
};

const styles = theme => ({
	form: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		paddingBottom: theme.spacing.unit
	},
	contentField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: '95%'
	},
	input: {
		display: 'none'
	},
	alignCenter: {
		alignItems: 'center',
		display: 'flex'
	},
	iconLarge: {
		fontSize: 40,
		marginRight: theme.spacing.unit
	},
	leftIcon: {
		fontSize: 20,
		marginRight: theme.spacing.unit
	},
	rightIcon: {
		fontSize: 20,
		marginLeft: theme.spacing.unit
	},
	button: {
		marginBottom: theme.spacing.unit * 2,
		marginLeft: 0,
		marginRight: theme.spacing.unit,
		marginTop: theme.spacing.unit * 2
	}
});

export default withStyles(styles)(CreatePin);

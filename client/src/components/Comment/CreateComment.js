import React from 'react';
import { withStyles } from '@material-ui/core';

const CreateComment = () => {
	return <div>CreateComment</div>;
};

const styles = theme => ({
	form: {
		alignItems: 'center',
		display: 'flex'
	},
	input: {
		flex: 1,
		marginLeft: 8
	},
	clearButton: {
		color: 'red',
		padding: 0
	},
	sendButton: {
		color: theme.palette.secondary.dark,
		padding: 0
	}
});

export default withStyles(styles)(CreateComment);

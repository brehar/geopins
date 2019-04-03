import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const Comments = () => <div>Comments</div>;

const styles = theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: '100%'
	},
	inline: {
		display: 'inline'
	}
});

export default withStyles(styles)(Comments);

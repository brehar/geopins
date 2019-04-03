import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const Blog = () => {
	return <div>Blog</div>;
};

const styles = {
	root: {
		display: 'flex',
		justifyContent: 'center',
		maxHeight: 'calc(100vh - 64px)',
		maxWidth: 400,
		minWidth: 350,
		overflowY: 'scroll'
	},
	rootMobile: {
		maxHeight: 300,
		maxWidth: '100%',
		overflowX: 'hidden',
		overflowY: 'scroll'
	}
};

export default withStyles(styles)(Blog);

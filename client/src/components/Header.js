import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const Header = () => {
	return <div>Header</div>;
};

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	grow: {
		alignItems: 'center',
		display: 'flex',
		flexGrow: 1
	},
	icon: {
		color: 'green',
		fontSize: 45,
		marginRight: theme.spacing.unit
	},
	mobile: {
		display: 'none'
	},
	picture: {
		borderRadius: '90%',
		height: '50px',
		marginRight: theme.spacing.unit * 2
	}
});

export default withStyles(styles)(Header);

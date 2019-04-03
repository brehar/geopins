import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const Map = () => {
	return <div>Map</div>;
};

const styles = {
	root: {
		display: 'flex'
	},
	rootMobile: {
		display: 'flex',
		flexDirection: 'column-reverse'
	},
	navigationControl: {
		left: 0,
		margin: '1em',
		position: 'absolute',
		top: 0
	},
	deleteIcon: {
		color: 'red'
	},
	popupImage: {
		height: 200,
		objectFit: 'cover',
		padding: '0.4em',
		width: 200
	},
	popupTab: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	}
};

export default withStyles(styles)(Map);

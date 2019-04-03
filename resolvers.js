const user = {
	_id: '1',
	name: 'Brett Hartman',
	email: 'brehardev@gmail.com',
	picture: 'https://cloudinary.com/asdf'
};

module.exports = {
	Query: {
		me: () => user
	}
};

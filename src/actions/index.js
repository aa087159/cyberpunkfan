export const changeHandler = (e) => {
	return {
		type: 'CHANGE_FORM',
		name: Object.keys(e)[0],
		value: Object.values(e)[0],
	};
};

export const getKlasses = () => {
	return (dispatch) => {
		fetch(`http://localhost:3001/classes`)
			.then((resp) => resp.json())
			.then((klasses) => dispatch({ type: "FETCH_KLASSES", payload: klasses }));
	};
};

export const getRaces = () => {
	return (dispatch) => {
		fetch(`http://localhost:3001/races`)
			.then((resp) => resp.json())
			.then((races) => dispatch({ type: "FETCH_RACES", payload: races }));
	};
};

export const getSpells = () => {
	return (dispatch) => {
		fetch(`http://localhost:3001/spells`)
			.then((resp) => resp.json())
			.then((spells) => dispatch({ type: "FETCH_SPELLS", payload: spells }));
	};
};

export const getCharacters = () => {
	return (dispatch) => {
		fetch(`http://localhost:3001/characters`)
			.then((resp) => resp.json())
			.then((characters) =>
				dispatch({ type: "FETCH_CHARACTERS", payload: characters })
			);
	};
};

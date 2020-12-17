export const getKlasses = () => {
	return (dispatch) => {
		fetch(`http://localhost:3001/classes`)
			.then((resp) => resp.json())
			.then((klasses) => dispatch({ type: "FETCH_KLASSES", payload: klasses }));
	};
};

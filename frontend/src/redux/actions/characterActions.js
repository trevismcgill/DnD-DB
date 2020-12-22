export const createCharacter = (data) => {
	return (dispatch) => {
		fetch(`https://localhost:3001/characters`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ character: data }),
		})
			.then((resp) => resp.json())
			.then((character) =>
				dispatch({ type: "CREATE_CHARACTER", payload: character })
			);
	};
};

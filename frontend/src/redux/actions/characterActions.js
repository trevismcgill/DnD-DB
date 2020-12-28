export const createCharacter = (data, history) => {
	return (dispatch) => {
		fetch(`http://localhost:3001/characters`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ character: data }),
		})
			.then((resp) => resp.json())
			.then((character) => {
				dispatch({ type: "CREATE_CHARACTER", payload: character });
			}, history.push("/characters"));
	};
};

export const deleteCharacter = (data, history) => {
	return (dispatch) => {
		fetch(`http://localhost:3001/characters/${data.id}`, {
			method: "DELETE",
			headers: {
				"Content-type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({ character: data }),
		})
			.then((resp) => resp.json())
			.then(
				(character) =>
					dispatch({ type: "DELETE_CHARACTER", payload: character }),
				history.push("/characters")
			);
	};
};

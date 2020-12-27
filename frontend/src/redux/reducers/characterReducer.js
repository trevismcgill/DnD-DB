export default function characterReducer(state = { all: [] }, action) {
	switch (action.type) {
		case "FETCH_CHARACTERS":
			return { ...state, all: action.payload };
		case "CREATE_CHARACTER":
			return { ...state, all: state.all.push(action.payload) };
		case "DELETE_CHARACTER":
			return {
				...state,
				all: state.all.filter((character) => character !== action.payload),
			};
		default:
			return state;
	}
}

export default function characterReducer(state = { all: [] }, action) {
	switch (action.type) {
		case "FETCH_CHARACTERS":
			return { ...state, characters: action.payload };
		default:
			return state;
	}
}

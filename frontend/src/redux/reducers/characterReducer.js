export default function characterReducer(state = { all: [] }, action) {
	switch (action.type) {
		case "FETCH_CHARACTERS":
			return { ...state, all: action.payload };
		default:
			return state;
	}
}

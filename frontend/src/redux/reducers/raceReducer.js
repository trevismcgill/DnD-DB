export default function raceReducer(state = { all: [] }, action) {
	switch (action.type) {
		case "FETCH_RACES":
			return { ...state, all: action.payload };
		default:
			return state;
	}
}

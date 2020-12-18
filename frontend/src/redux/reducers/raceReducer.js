export default function raceReducer(state = { all: [] }, action) {
	switch (action.type) {
		case "FETCH_RACES":
			return { ...state, races: action.payload };
		// case
		//     return
		default:
			return state;
	}
}

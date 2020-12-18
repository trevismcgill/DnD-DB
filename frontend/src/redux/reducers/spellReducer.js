export default function spellReducer(state = { all: [] }, action) {
	switch (action.type) {
		case "FETCH_SPELLS":
			return { ...state, spells: action.payload };
		// case
		//     return
		default:
			return state;
	}
}

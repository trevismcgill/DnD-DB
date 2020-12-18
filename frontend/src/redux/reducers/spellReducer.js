export default function spellReducer(state = { all: [] }, action) {
	switch (action.type) {
		case "FETCH_SPELLS":
			return { ...state, all: action.payload };
		default:
			return state;
	}
}

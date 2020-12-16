export default function klassesReducer(state = { all: [] }, action) {
    switch (action.type) {
        case "FETCH_KLASSES":
            return {...state, all: action.payload}
        default:
            return state
    }
}
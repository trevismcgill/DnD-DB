export default function klassesReducer(state = { all: [] }, action) {
    switch (action.type) {
        case "FETCH-KLASSES":
            return {...state, klasses: action.payload}
        default:
            return state
    }
}
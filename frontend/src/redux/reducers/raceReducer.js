export default function raceReducer(state = { all: [] }, action) {
    switch (action.type) {
        case "FETCH-RACES":
            return {...state, races: action.payload}
        default:
            return state
    }
}
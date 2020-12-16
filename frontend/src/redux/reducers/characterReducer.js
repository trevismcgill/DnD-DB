import { connect } from 'react-redux'

function characterReducer(state = { characters: [] }, action) {
    switch (action.type) {
        case "FETCH-CHARACTERS":
            return {...state, characters: action.payload}
        default:
            return state
    }
}
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import characterReducer from './reducers/characterReducer'
import klassReducer from './reducers/klassReducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    characters: characterReducer,
    klasses: klassReducer,
})

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store

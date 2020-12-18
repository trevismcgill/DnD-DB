import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import characterReducer from "./reducers/characterReducer";
import klassesReducer from "./reducers/klassReducer";
import raceReducer from "./reducers/raceReducer";
import spellReducer from "./reducers/spellReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	characters: characterReducer,
	klasses: klassesReducer,
	races: raceReducer,
	spells: spellReducer,
});

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;

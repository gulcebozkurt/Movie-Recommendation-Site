import { applyMiddleware, combineReducers, createStore } from "redux";
import movieReducer from "./reducers/movieReducer";
import genreReducer from "./reducers/genreReducer";
import { thunk } from "redux-thunk";

const rootReducers = combineReducers({
    movie: movieReducer,
    genre: genreReducer,
});

export default createStore(rootReducers, applyMiddleware(thunk));
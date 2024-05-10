import actions from "../actionTypes"
import api from "../../utils/api";


export const getPopular = () => (dispatch) => {
    dispatch({
        type: actions.MOVIES_LOADING,
    })
    api
        .get('/movie/popular')
        .then((res) =>
            dispatch({ type: actions.MOVIES_SUCCESS, payload: res.data.results })
        )
        .catch((err) =>
            dispatch({
                type: actions.MOVIES_ERROR,
                payload: err.message,
            })
        );
}

export const getGenres = () => (dispatch) => {
    dispatch({
        type: actions.GENRES_LOADING,
    });

    api
        .get('/genre/movie/list')
        .then((res) =>
            dispatch({ type: actions.GENRES_SUCCESS, payload: res.data.genres })
        )
        .catch((err) =>
            dispatch({ type: actions.GENRES_ERROR, payload: err.message })
        );
};
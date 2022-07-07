export const GET_MESSAGES = 'GET_MESSAGES';
export const GET_CHATS = 'GET_CHATS';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const GET_GISTS_REQUEST = "GISTS::GET_GISTS_REQUEST";
export const GET_GISTS_SUCCESS = "GISTS::GET_GISTS_SUCCESS";
export const GET_GISTS_FAILURE = "GISTS::GET_GISTS_FAILURE";
export const GET_GISTS = 'GISTS::GET_GISTS';
export const API_URL_PUBLIC = "https://api.github.com/gists/public";
export const API_URL_GIST = "https://api.github.com/gists/";

const getGists = () => ({
    type: GET_GISTS,
});




export const getGistsRequest = () => ({
    type: GET_GISTS_REQUEST,
});
export const getGistsSuccess = (data) => ({
    type: GET_GISTS_SUCCESS,
    payload: data,
});
export const getGistsFailure = (err) => ({
    type: GET_GISTS_FAILURE,
    payload: err,
});

export const getAllGists = () => async (dispatch) => {
    dispatch(getGistsRequest());
    try {
    const res = await fetch(API_URL_PUBLIC);
    console.log('be')
    if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
    }
    const result = await res.json();
    dispatch(getGistsSuccess(result));
    } catch (err) {
    dispatch(getGistsFailure(err.message));
    }
    };
    
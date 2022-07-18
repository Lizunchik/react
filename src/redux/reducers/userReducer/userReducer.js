import { loginError, loginStart, loginSucces, logoutError, logoutStart, logoutSucces, registerError, registerStart, registerSuccess } from '../../actions';
import * as types from '../../actionTypes';
import { auth } from '../../../firebase';

const initialState = {
    loading: false,
    error: null,
    currentUser: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_START:
        case types.LOGIN_START:
        case types.LOGOUT_START:
            return {
                ...state,
                loading: true,
            }
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:

            return {
                ...state,
                currentUser: action.payload,
                loading: false

            }
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: null
            }
        case types.REGISTER_ERROR:
        case types.LOGIN_ERROR:
        case types.LOGOUT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export const registerInitiate = (email, password, displayName) => {
    return (dispatch) => {
        dispatch(registerStart());
        auth.createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({
                    displayName
                })
                dispatch(registerSuccess(user));
            })
            .catch((err) => dispatch(registerError(err)))
    }
}

export const loginInitiate = (email, password) => {
    return (dispatch) => {
        dispatch(loginStart())
        auth.signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(loginSucces(user))
            })
            .catch((err) => {
                dispatch(loginError(err))
            })
    }
}

export const logoutInitiate = () => {
    return (dispatch) => {
        dispatch(logoutStart())
        auth.signOut()
        .then((resp)=> dispatch(logoutSucces()))
        .catch((e)=> dispatch(logoutError()))
    }
}
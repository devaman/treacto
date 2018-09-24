import * as actionTypes from '../actions/actionTypes';
const initialState = {
    token: null,
    loading: false,
    error: null,
    userId: null
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.AUTH_SUCCESS:
            localStorage.setItem('token', action.token)
            return {
                ...state,
                token: action.token,
                userId: action.user,
                loading: false,
                error: null
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionTypes.AUTH_SET_TOKEN:
            return {
                token: action.token
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                token: null
            }
        default:
            return state;
    }
}
export default reducer;
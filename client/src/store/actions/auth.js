import * as actionTypes from './actionTypes';
import axios from "axios";
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}
export const authSuccess = (auth) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: auth.token,
        user:auth.username
    }
}

export const authFail = (err) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: err
    }
}
let url='';
export const setTokenAction = (token)=>{
    return{
        type:actionTypes.AUTH_SET_TOKEN,
        token:token
    }
}
export const setToken=()=>{
    let token = localStorage.getItem('token')
    return dispatch=>{
        axios.get('http://localhost:4000/api/validate?token='+token).then(res=>{
            if(res.data.success){
                dispatch(setTokenAction(token))
            }
        }).catch(err=>{
            dispatch(logout());
        })
    }
}
export const logout = ()=>{
    localStorage.removeItem('token')
    return{
        type:actionTypes.AUTH_LOGOUT,
    }
}
export const auth = (email, password, isSignup) => {
    if (!isSignup)
         url = 'http://localhost:4000/auth/signup';
        else
        url = 'http://localhost:4000/auth/signin';
    return dispatch => {
        console.log(email);
        
        const data = {
            username: email,
            password: password,
        }
        dispatch(authStart());
        axios.post(url, data)
            .then(res => {
                console.log(res);

                dispatch(authSuccess(res.data))
            }).catch(err => {
                console.log(err.response);

                dispatch(authFail(err.response.data.msg))
            })
    }
}

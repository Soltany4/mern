import { ActionTypes } from "../actionType/actionTypes";

export const login = (data) => {
    return {
        type: ActionTypes.LOGIN,
        payload: data
    }
}

export const register = (data) => {
    return {
        type: ActionTypes.REGISTER,
        payload: data
    }
}

export const logout = () => {
    return {
        type: ActionTypes.LOGOUT,
        payload: null
    }
}
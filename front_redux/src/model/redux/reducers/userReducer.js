import { ActionTypes } from "../actionType/actionTypes"

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user :null,
}

export const userReducer = (state = initialState, action) => {
    switch(ActionTypes) {
        case(ActionTypes.REGISTER):
            return {...state, user: action.payload}
        case(ActionTypes.LOGIN):
            return {...state, user: action.payload}
        case(ActionTypes.LOGOUT):
            return {...state, user: null}
        default: 
            return state
    }
}
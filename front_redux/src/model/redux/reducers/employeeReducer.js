import { ActionTypes } from "../actionType/actionTypes"

export const initialState = {
    employees: [],
    employee: {},
}

export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_EMPLOYEES:
            return {...state, employees: action.payload}
        case ActionTypes.ADD_EMPLOYEE:
            return {...state, employees: action.payload}
        case ActionTypes.SELECT_EMPLOYEE:
            return {...state, employee: action.payload}
        case ActionTypes.DELETE_SELECTED_EMPLOYEE:
            return {...state, employees: action.payload}
        case ActionTypes.UPDATE_SELECTED_EMPLOYEE:
            return {...state, employees: action.payload}            
        default:
            return state
}
}
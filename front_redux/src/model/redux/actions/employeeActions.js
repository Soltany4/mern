import { ActionTypes } from "../actionType/actionTypes"

export const getEmployees = (data) => {
    return {
        type: ActionTypes.GET_EMPLOYEES,
        payload: data
    }
}

export const addEmployee = (data) => {
    return {
        type: ActionTypes.ADD_EMPLOYEE,
        payload: data
    }
}

export const selectEmployee = (data) => {
    return {
        type: ActionTypes.SELECT_EMPLOYEE,
        payload: data
    }
}

export const deleteEmployee = (data) => {
    return {
        type: ActionTypes.DELETE_SELECTED_EMPLOYEE,
        payload: data
    }
}

export const updateEmployee = (data) => {
    return {
        type: ActionTypes.UPDATE_SELECTED_EMPLOYEE,
        payload: data
    }
}
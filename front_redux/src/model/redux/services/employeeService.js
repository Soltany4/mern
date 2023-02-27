import axios from 'axios'
import { getEmployees, addEmployee, selectEmployee, deleteEmployee, updateEmployee } from "../actions/employeeActions"

const API = 'http://localhost:8080/employee/'

//Get all Employees
export const getAllEmployees = () => async (dispatch) => {
    try {
    const response = await axios.get(API)
    dispatch(getEmployees(response.data))
    }catch (error) {
        console.log(error)
    }
}


//Add Employee
export const addAnEmployee = (formData) => async (dispatch) => {
    try {
        const response = await axios.post(API, formData)
        dispatch(addEmployee(response.data))
    } catch (error) {
        console.log(error)
    }
}

//Select Employee
export const showEmployee = (id) => async (dispatch) => {
    try{
        const response = await axios.get(API + id)
        dispatch(selectEmployee(response.data))
    }catch (error) {
        console.log(error)
    }
}

//Delete Employee
export const deleteAnEmployee = (id) => async (dispatch) => {
    try {
        const response = await axios.delete(API + id)
        dispatch(deleteEmployee(response.data))
    } catch (error) {
        console.log(error)
    }
}

//Update Employee
export const updateTheEmployee = (id, formData) => async (dispatch) => {
    try {
        const response = await axios.put(API + id, formData)
        dispatch(updateEmployee(response.data))
    } catch (error) {
        console.log(error)
    }
}
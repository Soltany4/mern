import axios from 'axios'
import { login, register, logout } from '../actions/userActions'

const API = 'http://localhost:8080/users/'

//Register
export const registeration = (userData) => async (dispatch) => {
    try {
        const response = await axios.post(API + 'register', userData)

        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data))
        }
        dispatch(register(response.data))
    } catch (error) {
        console.log(error)
    }
}

//Login
export const userLogin = (userData) => async (dispatch) => {
    try {
        const response = await axios.post(API + 'login', userData)

        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data))
        }

        dispatch(login(response.data))
    } catch (error) {
        console.log(error)
    }
}

//Logout
export const userLogout = () => async(dispatch) => {
    localStorage.removeItem('user')
    dispatch(logout())
}
import axios from 'axios'

const API = 'http://localhost:8080/employee'


const getEmployees = async () => {
    const response = await axios.get(API)
    return response.data
}

const addEmployee = async () => {
    const response = await axios.post(API)
    return response.data
}

const updateEmployee = async (employeeId) => {
    const response = await axios.put(`${API}${employeeId}`)
    return response.data
}

const deleteEmployee = async (employeeId) => {
    const response = await axios.delete(`${API}${employeeId}`)
    return response.data
}


const employeeService =  {
    getEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee

}

export default employeeService
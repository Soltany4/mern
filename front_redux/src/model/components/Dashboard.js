import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getAllEmployees } from '../redux/services/employeeService'
import EmployeeItem from './EmployeeItem'

const Dashboard = () => {

    const dispatch = useDispatch()
    
    const user = useSelector((state) => state.auth.user)
    const employees = useSelector((state) => state.allEmployees.employees)
    const navigate = useNavigate()
    
    useEffect(() => {

      if (!user) {
        navigate('/login')
      }
      dispatch(getAllEmployees())
      return () => {
      }
    }, [user, navigate, dispatch])


  return (
    <>
    <h2>Welcome</h2>
      <Link to="/add_employee"><button className='btn btn-outline-success'>Add employee</button></Link>
      <table className="table">
          <thead className="thead-dark">
              <tr>
                  <th>ID</th>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Contact Number</th>
                  <th>Age</th>
                  <th>Date of birth</th>
                  <th>Salary</th>
                  <th>Address</th>
                  <th>Actions</th>
              </tr>
          </thead>
              {employees.map((emp) => (
                <EmployeeItem key={emp._id} emp={emp} />
              ))}
      </table>
    </>
  )
}

export default Dashboard
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteAnEmployee, showEmployee } from '../redux/services/employeeService'

const EmployeeItem = ({emp}) => {

    const dispatch = useDispatch()

  return (
    <>  
        <tbody>
            <tr>
                <th scope="row">{emp.id}</th>
                <td><img src={emp.imageUrl} width="60" style={{borderRadius: 15}}/></td>
                <td>{emp.firstName}</td>
                    <td>{emp.lastName}</td>
                    <td>{emp.email}</td>
                    <td>{emp.contactNumber}</td>
                    <td>{emp.age}</td>
                    <td>{emp.dob}</td>
                    <td>{emp.salary}</td>
                    <td>{emp.address}</td>
                    <td>
                        <Link to="/employeeDetails">
                        <button  className='btn btn-outline-primary' onClick={() => dispatch(showEmployee(emp._id))}>
                        View
                        </button>
                        </Link>
                        <button  className='btn btn-outline-danger' onClick={() => {dispatch(deleteAnEmployee(emp._id))
                                                                                    window.location.reload(true)}}>
                        Delete
                        </button>
                    </td>
            </tr>
        </tbody> 
  </>
  )
}

export default EmployeeItem
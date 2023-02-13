import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const EmployeeItem = ({emp, emplyoeeDetails, setEmployeeDetails}) => {


    const deleteEmployee = async () => {
            const response = await axios.delete(`http://localhost:8080/employee/${emp._id}`)
            window.location.reload(true)
        }



    const getEmployee = async () => {
        const response = await axios.get(`http://localhost:8080/employee/${emp._id}`)
        console.log(response.data)
        setEmployeeDetails(response.data)
    }


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
                        <Link to="/details" emp={emp}>
                        <button onClick={() => (getEmployee(emp._id))} className='btn btn-outline-primary'>
                        Afficher
                        </button>
                        </Link>
                        <button onClick={() => (deleteEmployee(emp._id))} className='btn btn-outline-danger'>
                        Supprimer
                        </button>
                    </td>
            </tr>
        </tbody> 
  </>
  )
}

export default EmployeeItem

import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Details = () => {

    const {employee} = useSelector((state) => state.allEmployees)
    const navigate = useNavigate()

  return (
    <>
        <h3>_ID: {employee._id}</h3>
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Avatar</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th>Téléphone</th>
                    <th>Age</th>
                    <th>Date de naissance</th>
                    <th>Salaire</th>
                    <th>Adresse</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">{employee.id}</th>
                    <td><img src={employee.imageUrl} width="60" style={{borderRadius: 15}}/></td>
                    <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>{employee.contactNumber}</td>
                        <td>{employee.age}</td>
                        <td>{employee.dob}</td>
                        <td>{employee.salary}</td>
                        <td>{employee.address}</td>
                        <td>
                            <Link to="/edit_employee">
                            <button className="btn btn-outline-success btn-lg">Modifier</button>
                            </Link>
                        </td>
                </tr>
            </tbody>
        </table>
        <button className='btn btn-outline-primary btn-lg' onClick={() => navigate('/')}>Retour</button>
    </>
  )
}

export default Details
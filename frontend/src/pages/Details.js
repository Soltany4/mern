import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Details = ({employeeDetails}) => {

    const navigate = useNavigate()
  return (
    <>
        <h3>_ID: {employeeDetails._id}</h3>
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
                    <th scope="row">{employeeDetails.id}</th>
                    <td><img src={employeeDetails.imageUrl} width="60" style={{borderRadius: 15}}/></td>
                    <td>{employeeDetails.firstName}</td>
                        <td>{employeeDetails.lastName}</td>
                        <td>{employeeDetails.email}</td>
                        <td>{employeeDetails.contactNumber}</td>
                        <td>{employeeDetails.age}</td>
                        <td>{employeeDetails.dob}</td>
                        <td>{employeeDetails.salary}</td>
                        <td>{employeeDetails.address}</td>
                        <td>
                            <Link to="/edit_employee">
                            <button className="btn btn-outline-success btn-lg" onClick={() => console.log(employeeDetails)}>Modifier</button>
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
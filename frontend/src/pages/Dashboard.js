import React from 'react'
import { Link } from 'react-router-dom'
import EmployeeItem from '../components/EmployeeItem'






const Dashboard = ({employees, setEmployees, employeeDetails, setEmployeeDetails}) => {




  return (
    <>
      <section className='heading'>
        <p>Employee Dashboard</p>
      </section>
      {!window.localStorage.getItem('user') ? (
      <h3>Login To Proceed</h3>
      ) : (
        <Link to="/add_employee">
        <button className='btn btn-outline-success'>Ajouter</button>
        </Link>
      )}
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
            {employees.map((emp) => (
              <EmployeeItem key={emp._id} emp={emp} employeeDetails={employeeDetails} setEmployeeDetails={setEmployeeDetails}/>
            ))}
        </table>

    
    </>
  )
}

export default Dashboard
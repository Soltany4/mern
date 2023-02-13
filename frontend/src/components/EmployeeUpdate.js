import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EmployeeUpdate = ({employeeDetails}) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        avatar: employeeDetails.imageUrl, firstName: employeeDetails.firstName,
        lastName: employeeDetails.lastName,  email: employeeDetails.email, contactNumber: employeeDetails.contactNumber,
        age: employeeDetails.age, dob: employeeDetails.dob, salary: employeeDetails.salary, address: employeeDetails.address
    })


    const handleFormChange = (event) => {
        event.preventDefault()
        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value
        const newFormData = { ...formData}
        newFormData[fieldName] = fieldValue
        setFormData(newFormData)
    }


    const updateEmployee = async () => {
        const response = await axios.put(`http://localhost:8080/employee/${employeeDetails._id}`, formData)
        console.log(response.data)
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        updateEmployee()
        navigate('/')
        window.location.reload(true)
      }
      const onClickReset = () => {
        navigate('/details')
      }



  return (
    <>
    <form methode="post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input type="text" name="imageUrl" className="form-control" id="exampleFormControlInput1" placeholder={employeeDetails.imageUrl} onChange={handleFormChange} />
      </div>
      <div className="mb-3">
        <input type="text" name="firstName" className="form-control" id="exampleFormControlInput1" placeholder={employeeDetails.firstName}  onChange={handleFormChange}/>
      </div>
      <div className="mb-3">
        <input type="text" name="lastName" className="form-control" id="exampleFormControlInput1" placeholder={employeeDetails.lastName}  onChange={handleFormChange}/>
      </div>
      <div className="mb-3">
        <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder={employeeDetails.email}  onChange={handleFormChange}/>
      </div>
      <div className="mb-3">
        <input type="text" name="contactNumber" className="form-control" id="exampleFormControlInput1" placeholder={employeeDetails.contactNumber}  onChange={handleFormChange}/>
      </div>
      <div className="mb-3">
        <input type="text" name="age" className="form-control" id="exampleFormControlInput1" placeholder={employeeDetails.age} onChange={handleFormChange}/>
      </div>
      <div className="mb-3">
        <input type="text" name="dob" className="form-control" id="exampleFormControlInput1" placeholder={employeeDetails.dob} onChange={handleFormChange}/>
      </div>
      <div className="mb-3">
        <input type="text" name="salary" className="form-control" id="exampleFormControlInput1" placeholder={employeeDetails.salary}  onChange={handleFormChange}/>
      </div>
      <div className="mb-3">
        <input type="text" name="address" className="form-control" id="exampleFormControlInput1" placeholder={employeeDetails.address} onChange={handleFormChange}/>
      </div>
      <div className="d-flex gap-2 col-3 mx-auto">
        <button className="btn btn-outline-success btn-lg" type="submit">Ajouter</button>
        <button className="btn btn-outline-success btn-lg" type="reset" onClick={onClickReset}>Annuler</button>
      </div>
    </form>
  </>
  )
}

export default EmployeeUpdate
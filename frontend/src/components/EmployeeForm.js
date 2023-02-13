import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EmployeeForm = ({employees, setEmployees, employeeDetails}) => {

  const navigate = useNavigate()


  const [formData, setFormData] = useState({
      avatar: "", firstName: "",
      lastName: "",  email: "", contactNumber: "",
      dob: "", salary: "", address: ""
  })

  const handleFormChange = (event) => {
      event.preventDefault()
      const fieldName = event.target.getAttribute('name')
      const fieldValue = event.target.value
      const newFormData = { ...formData}
      newFormData[fieldName] = fieldValue
      setFormData(newFormData)
  }

  const addEmployee = async () => {
    const response = await axios.post('http://localhost:8080/employee', formData)
    console.log(response.data)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    addEmployee()
    navigate('/')
    window.location.reload(true)
  }
  const onClickReset = () => {
    navigate('/')
  }


  return (
    <>
      <form methode="post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" name="imageUrl" className="form-control" id="exampleFormControlInput1" placeholder="Avatar Url" required="required" onChange={handleFormChange}/>
        </div>
        <div className="mb-3">
          <input type="text" name="firstName" className="form-control" id="exampleFormControlInput1" placeholder="Nom" required="required" onChange={handleFormChange}/>
        </div>
        <div className="mb-3">
          <input type="text" name="lastName" className="form-control" id="exampleFormControlInput1" placeholder="Prénom" required="required" onChange={handleFormChange}/>
        </div>
        <div className="mb-3">
          <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required="required" onChange={handleFormChange}/>
        </div>
        <div className="mb-3">
          <input type="text" name="contactNumber" className="form-control" id="exampleFormControlInput1" placeholder="Téléphone" required="required" onChange={handleFormChange}/>
        </div>
        <div className="mb-3">
          <input type="text" name="age" className="form-control" id="exampleFormControlInput1" placeholder="Age" required="required" onChange={handleFormChange}/>
        </div>
        <div className="mb-3">
          <input type="text" name="dob" className="form-control" id="exampleFormControlInput1" placeholder="Date de naissance" required="required" onChange={handleFormChange}/>
        </div>
        <div className="mb-3">
          <input type="text" name="salary" className="form-control" id="exampleFormControlInput1" placeholder="Salaire" required="required" onChange={handleFormChange}/>
        </div>
        <div className="mb-3">
          <input type="text" name="address" className="form-control" id="exampleFormControlInput1" placeholder="Adresse" required="required" onChange={handleFormChange}/>
        </div>
        <div className="d-flex gap-2 col-3 mx-auto">
          <button className="btn btn-outline-success btn-lg" type="submit">Ajouter</button>
          <button className="btn btn-outline-success btn-lg" type="reset" onClick={onClickReset}>Annuler</button>
        </div>
      </form>
    </>
  )
}

export default EmployeeForm
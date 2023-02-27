import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addAnEmployee } from '../redux/services/employeeService'

const EmployeeForm = () => {

    const dispatch = useDispatch()
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

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addAnEmployee(formData))
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
          <input type="text" name="firstName" className="form-control" id="exampleFormControlInput1" placeholder="Name" required="required" onChange={handleFormChange}/>
        </div>
        <div className="mb-3">
          <input type="text" name="lastName" className="form-control" id="exampleFormControlInput1" placeholder="Last Name" required="required" onChange={handleFormChange}/>
        </div>
        <div className="mb-3">
          <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required="required" onChange={handleFormChange}/>
        </div>
        <div className="mb-3">
          <input type="text" name="contactNumber" className="form-control" id="exampleFormControlInput1" placeholder="Contact Number" required="required" onChange={handleFormChange}/>
        </div>
        <div className="mb-3">
          <input type="text" name="age" className="form-control" id="exampleFormControlInput1" placeholder="Age" required="required" onChange={handleFormChange}/>
        </div>
        <div className="mb-3">
          <input type="date" name="dob" className="form-control" id="exampleFormControlInput1" placeholder="Date of birth" required="required" onChange={handleFormChange}/>
        </div>
        <div className="mb-3">
          <input type="text" name="salary" className="form-control" id="exampleFormControlInput1" placeholder="Salary" required="required" onChange={handleFormChange}/>
        </div>
        <div className="mb-3">
          <input type="text" name="address" className="form-control" id="exampleFormControlInput1" placeholder="address" required="required" onChange={handleFormChange}/>
        </div>
        <div className="d-flex gap-2 col-3 mx-auto">
          <button className="btn btn-outline-success btn-lg" type="submit">Add</button>
          <button className="btn btn-outline-success btn-lg" type="reset" onClick={onClickReset}>Cancel</button>
        </div>
      </form>
    </>
  )
}

export default EmployeeForm
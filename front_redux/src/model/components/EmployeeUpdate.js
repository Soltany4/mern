import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateTheEmployee } from '../redux/services/employeeService'

const EmployeeUpdate = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { employee } = useSelector((state) => state.allEmployees)

    let emp = employee

    const [formData, setFormData] = useState({
        _id: emp._id, id: emp.id,
        imageUrl: emp.imageUrl, firstName: emp.firstName,
        lastName: emp.lastName,  email: emp.email, contactNumber: emp.contactNumber,
        age: emp.age, dob: emp.dob, salary: emp.salary, address: emp.address
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
        console.log(formData)
        dispatch(updateTheEmployee(formData._id, formData))
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
          <input type="text" name="imageUrl" className="form-control" id="exampleFormControlInput1" placeholder={emp.imageUrl} onChange={handleFormChange} />
        </div>
        <div className="mb-3">
          <input type="text" name="firstName" className="form-control" id="exampleFormControlInput1" placeholder={emp.firstName}  onChange={handleFormChange} />
        </div>
        <div className="mb-3">
          <input type="text" name="lastName" className="form-control" id="exampleFormControlInput1" placeholder={emp.lastName}  onChange={handleFormChange} />
        </div>
        <div className="mb-3">
          <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder={emp.email}  onChange={handleFormChange} />
        </div>
        <div className="mb-3">
          <input type="text" name="contactNumber" className="form-control" id="exampleFormControlInput1" placeholder={emp.contactNumber}  onChange={handleFormChange} />
        </div>
        <div className="mb-3">
          <input type="text" name="age" className="form-control" id="exampleFormControlInput1" placeholder={emp.age} onChange={handleFormChange} disabled readOnly />
        </div>
        <div className="mb-3">
          <input type="text" name="dob" className="form-control" id="exampleFormControlInput1" placeholder={emp.dob} onChange={handleFormChange} disabled readOnly />
        </div>
        <div className="mb-3">
          <input type="text" name="salary" className="form-control" id="exampleFormControlInput1" placeholder={emp.salary} onChange={handleFormChange} />
        </div>
        <div className="mb-3">
          <input type="text" name="address" className="form-control" id="exampleFormControlInput1" placeholder={emp.address} onChange={handleFormChange} />
        </div>
        <div className="d-flex gap-2 col-3 mx-auto">
          <button className="btn btn-outline-success btn-lg" type="submit">Update</button>
          <button className="btn btn-outline-success btn-lg" type="reset" onClick={onClickReset}>Cancel</button>
        </div>
      </form>
    </>
  )
}

export default EmployeeUpdate
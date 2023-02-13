import axios from 'axios'
import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {

  const navigate = useNavigate()

  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    password2: '',
  })
  
  const { fullName, email, password, password2 } = formData
  
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  
  const register = async (userData) => {
    const response = await axios.post('http://localhost:8080/users/register', userData)

    console.log(response.data)

    if (response.status === 200) {
      navigate('/login')
      window.location.reload(true)
    }
  
    return response.data
  }
  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        fullName,
        email,
        password,
      }

      console.log(userData)

      register(userData)

    }
  }

  return (
    <>
    <section className='heading'>
      <h1>
        <FaUser /> Register
      </h1>
      <p>Please create an account</p>
    </section>

    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <input
            type='text'
            className='form-control'
            id='name'
            name='fullName'
            value={fullName}
            placeholder='Full name'
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={email}
            placeholder='Email'
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={password}
            placeholder='Password'
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <input
            type='password'
            className='form-control'
            id='password2'
            name='password2'
            value={password2}
            placeholder='Confirm password'
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <button type='submit' className='btn btn-outline-success btn-lg'>
            Register
          </button>
        </div>
      </form>
    </section>
  </>
    )
}

export default Register
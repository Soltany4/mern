import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Login = ({token, setToken}) => {

  const navigate = useNavigate()


  const login = async (userData) => {
    const response = await axios.post('http://localhost:8080/users/login', userData)
    if (response.status === 200) {
      localStorage.setItem('user', JSON.stringify(response.data))
      toast.info("Welcome")
      setToken(response.data)
    } 

    console.log(response.data)    
    console.log(token)
    navigate('/')
    
    return response.data
  }


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData


  useEffect (() => {

  }, [])
    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }
  
    const onSubmit = (e) => {
      e.preventDefault()
  
      const userData = {
        email,
        password,
      }
      login(userData)
    }
    

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and Manage employees</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
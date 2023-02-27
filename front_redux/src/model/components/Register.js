import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registeration } from '../redux/services/userService'

const Register = () => {


    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        password2: '',
      })
      
      const { fullName, email, password, password2 } = formData

      useEffect(() => {

        if (user) {
            window.location.reload(true)
            navigate('/')
        }

      }, [user, navigate, dispatch])
      
      
      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }


      const onSubmit = (e) => {
        e.preventDefault()

        if (password !== password2) {
            alert('Passwords do not match')
        } else {
            const userData = {
                fullName,
                email,
                password
            }
            dispatch(registeration(userData))
        }
      }



  return (
    <>
    <section className='heading'>
      <h1>
         Register
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
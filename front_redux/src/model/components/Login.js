import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../redux/services/userService'

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)



    const [formData, setFormData] = useState({
        email: '',
        password: '',
      })
    
    const { email, password } = formData


    useEffect(() => {
        
        if ( window.localStorage.getItem('user') ) {
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

        const userData = {
            email,
            password
        }

        dispatch(userLogin(userData))
        if (window.localStorage.getItem('user')) {
            window.location.reload(true)
        }
    }




  return (
    <>
      <section className='heading'>
        <h1>
             Login
        </h1>
        <p>Login and Manage employees</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='mb-3'>
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
          <div className='mb-3'>
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
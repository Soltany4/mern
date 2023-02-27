import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userLogout } from '../redux/services/userService'


const Header = () => {


    const navigate = useNavigate()
    const {user} = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(userLogout())
        navigate('/')
        window.location.reload(true)
    }


  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>Employee Management System</Link>
        </div>


        <ul>
            {user ? (
            <>
             <li>
             <button className='btn' onClick={onLogout}>
                Logout
             </button>
            </li>
            </>
            ) : (
            <>
            <li>
            <Link to="/login">
                Login
            </Link>
        </li>
        <li>
            <Link to="/register">
                Register
            </Link>
        </li>
        </>
            )} 
        </ul>

    </header>
  )
}

export default Header
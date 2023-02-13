import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({token, setToken}) => {

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('user')
    navigate('/')
    window.location.reload(true)
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Système de gestion des employees</Link>
      </div>
      <ul> { window.localStorage.getItem('user') ? (
          <li>
            <button className='btn' onClick={logout}>
              <FaSignOutAlt /> Logout
            </button>
            </li>
      ) : ( 
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
      )}
      </ul>
    </header>
  )
}

export default Header
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import { useEffect, useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import axios from 'axios';
import Details from './pages/Details';
import EmployeeUpdate from './components/EmployeeUpdate';

function App() {

  const [token, setToken] = useState({})

  const [employees, setEmployees] = useState([])

  const [employeeDetails, setEmployeeDetails] = useState({})

  const getList =  async () => {
      const response = await axios.get('http://localhost:8080/employee')
      setEmployees(response.data)
  }

  useEffect(()=> {
      getList()
  }, [])

  return (
    <>
    <Router>
        <div className='container'>
          <Header token={token} setToken={setToken} />
          <Routes>
            <Route path='/' element={<Dashboard employees={employees} setEmployees={setEmployees} employeeDetails={employeeDetails} setEmployeeDetails={setEmployeeDetails}/>} />
            <Route path='/login' element={<Login token={token} setToken={setToken}/>} />
            <Route path='/register' element={<Register />} />
            <Route path='/add_employee' element={<EmployeeForm employees={employees} setEmployees={setEmployees}/>} />
            <Route path='/edit_employee' element={<EmployeeUpdate  employeeDetails={employeeDetails}/>}/>
            <Route path='/details' element={<Details employeeDetails={employeeDetails}/>} />
          </Routes>
        </div>
      </Router>
      <ToastContainer autoClose={1000}/>
    </>
  );
}

export default App;

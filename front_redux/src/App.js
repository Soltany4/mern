import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './model/components/Header';
import Dashboard from './model/components/Dashboard';
import './App.css'
import EmployeeForm from './model/components/EmployeeForm';
import Details from './model/components/Details';
import EmployeeUpdate from './model/components/EmployeeUpdate';
import Login from './model/components/Login';
import Register from './model/components/Register';

function App() {
  return (
    <>
      <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/add_employee' element={<EmployeeForm />} />
          <Route path='/employeeDetails' element={<Details />} />
          <Route path='/edit_employee' element={<EmployeeUpdate />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;

import express from 'express'
import { addEmployee, deleteEmployee, getEmployee, listEmployee, updateEmployee } from '../controllers/employee.js';
import {  } from '../middleware/authenticationMiddleware.js'

const router = express.Router()


router.get('/', listEmployee)
router.post('/', addEmployee)

router.get('/:id', getEmployee)
router.delete('/:id', deleteEmployee)
router.put('/:id', updateEmployee)


export default router;
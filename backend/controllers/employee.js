import Employee from "../models/employeeModel.js"

//liste des employees
export const listEmployee = async (req, res) => {
    const employees = await Employee.find()
    res.status(200).json(employees)
}


//ajouter un employee
export const addEmployee = async (req, res) => {

    if (!req.body.text) {
        res.status(400) 
    }

    const employee = await Employee.create(req.body)
    
    res.status(200).json(employee)
}


// employee avec id
export const getEmployee = async(req, res) => {

    const employee = await Employee.findById(req.params.id)

    if (!employee) {
        res.status(400)
    } else {
        res.status(200).json(employee)
    }


}


//supprimer employee avec id
export const deleteEmployee = async (req, res) => {

    const employee = await Employee.findById(req.params.id)

    if(!employee) {
        res.status(400)
    }

    await employee.remove()

    res.status(200).json({id: req.params.id})

}


//modifier employee avec id
export const updateEmployee = async (req, res) => {
    
    const employee = await Employee.findById(req.params.id)

    if(!employee) {
        res.status(400)
    }

    const updtaedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body)

    res.status(200).json(updtaedEmployee)

}
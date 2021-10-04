const Employee = require('../models/employee.model');

//add Employee
const addEmployee= async(req, res) => {
    try {
        if (req.body) {
            const employee = new Employee (req.body);
            await employee .save()
                .then((data) => {
                    res.status(200).send({ data: data });
                })
                .catch((error) => {
                    res.status(500).send({ error: error })
                });
        } else {
            console.log('Please enter body values');
        }
    } catch (error) {
        res.send({ error: error.message });
    }
}
const getEmployee = async(req, res) => {
    try {
       await Employee.find({ })
           .then((data) => {
             res.status(200).send({ data: data });
         })
   
           .catch((error) => {
               res.status(500).send({ error: error });
             })
                
            } catch (error) {
                 res.send({ error: error.message });
             }
       }

       const deleteEmployee = async (req,res) => {
        try {
            if(req.params.id){
                await Employee.findByIdAndDelete(req.params.id)
                .then(data => {
                    res.status(200).send({data: data});
                })
                .catch(error => {
                    res.status(500).send({error: error.message});
                })
            }
        } catch (error) {
            res.send({error: error.message});
        }
    } 

    const getEmployeeById = async(req, res) => {
        if(req.params.id){
            await Employee.findById(req.params.id)
                .then((data) => {
                    res.status(200).send({ data: data });
                })
                .catch((error) => {
                    res.status(500).send({ error: error });
                });
        }
    }

    const updateEmployee = async(req, res) => {
        if(req.body && req.params.id){
            await Employee.findByIdAndUpdate(req.params.id, { $set: req.body })
                .then((data) => {
                    res.status(200).send({ data: data });
                })
                .catch((error) => {
                    res.status(500).send({ error: error })
                });
        }
    }

module.exports = {
    addEmployee,
    getEmployee,
    deleteEmployee,
    getEmployeeById,
    updateEmployee
}
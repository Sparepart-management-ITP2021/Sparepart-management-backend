const Leave = require('../models/leave.model');

//add Leave
const addLeave= async(req, res) => {
    try {
        if (req.body) {
            const leave = new Leave (req.body);
            await leave .save()
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

const getLeave = async(req, res) => {
    try {
       await Leave.find({ })
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

 const deleteLeave = async (req,res) => {
        try {
            if(req.params.id){
                await Leave.findByIdAndDelete(req.params.id)
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




module.exports = {
    addLeave,
    getLeave,
    deleteLeave
}
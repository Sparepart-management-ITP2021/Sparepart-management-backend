const Bill = require('../models/bill.model');

//Add bill
const addBill = async(req, res) => {
    try{
        if (req.body) {
            const bill = new Bill(req.body);
            await bill.save()
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

const getBill = async(req, res) => {
    try {
       await Bill.find({ })
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

       const deleteBill = async (req,res) => {
        try {
            if(req.params.id){
                await Bill.findByIdAndDelete(req.params.id)
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

    const getBillById = async(req, res) => {
        if(req.params.id){
            await Bill.findById(req.params.id)
                .then((data) => {
                    res.status(200).send({ data: data });
                })
                .catch((error) => {
                    res.status(500).send({ error: error });
                });
        }
    }

    const updateBill = async(req, res) => {
        if(req.body && req.params.id){
            await Bill.findByIdAndUpdate(req.params.id, { $set: req.body })
                .then((data) => {
                    res.status(200).send({ data: data });
                })
                .catch((error) => {
                    res.status(500).send({ error: error })
                });
        }
    }



module.exports = {
    addBill,
    getBill,
    deleteBill,
    getBillById,
    updateBill
}





        


    



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



module.exports = {
    addBill
}





        


    



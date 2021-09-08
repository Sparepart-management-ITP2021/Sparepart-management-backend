const Payment = require('../models/insertpayment.model');

//add payment

const addpayment = async(req, res) => {
    try {
        if (req.body) {
            const insertpayment = new Payment(req.body);
            await insertpayment.save()
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
    addpayment
}
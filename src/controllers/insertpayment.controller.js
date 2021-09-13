const InsertPayment = require('../models/insertpayment.model');

//add payment

const addInsertPayment = async(req, res) => {
    try {
        if (req.body) {
            const insertpayment = new InsertPayment(req.body);
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

const getInsertPayment = async(req, res) => {
    try {
        await InsertPayment.find({})
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
const deleteInsertPayment = async(req, res) => {
    try {
        if (req.params.id) {
            await InsertPayment.findByIdAndDelete(req.params.id)
                .then(data => {
                    res.status(200).send({ data: data });
                })
                .catch(error => {
                    res.status(500).send({ error: error.message });
                })
        }
    } catch (error) {
        res.send({ error: error.message });
    }
}


module.exports = {
    addInsertPayment,
    getInsertPayment,
    deleteInsertPayment
}
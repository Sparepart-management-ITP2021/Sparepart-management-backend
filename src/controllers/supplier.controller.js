const Supplier = require('../models/supplier.model');

//add supplier
const addSupplier = async(req, res) => {
    try {
        if (req.body) {
            const supplier = new Supplier(req.body);
            await supplier.save()
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
    addSupplier
}
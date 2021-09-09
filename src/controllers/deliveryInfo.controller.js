const DeliveryInfo = require('../models/deliveryInfo.model');

//add delivery info

const addDeliveryInfo = async(req, res) => {
    try {
        if (req.body) {
            const deliveryInfo = new DeliveryInfo(req.body);
            await deliveryInfo.save()
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
    addDeliveryInfo
}
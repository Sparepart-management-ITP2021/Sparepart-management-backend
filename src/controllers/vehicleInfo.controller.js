const VehicleInfo = require('../models/vehicleInfo.model');

//add delivery info

const addVehicleInfo = async(req, res) => {
    try {
        if (req.body) {
            const vehicleInfo = new VehicleInfo(req.body);
            await vehicleInfo.save()
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
    addVehicleInfo
}
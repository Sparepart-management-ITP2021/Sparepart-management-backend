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

const getDeliveryInfo = async(req, res) => {
    try {
       await DeliveryInfo.find({ })
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

const deleteDeliveryInfo = async (req,res) => {
        try {
            if(req.params.id){
                await DeliveryInfo.findByIdAndDelete(req.params.id)
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

    const getDeliveryInfoById = async(req, res) => {
        if(req.params.id){
            await DeliveryInfo.findById(req.params.id)
                .then((data) => {
                    res.status(200).send({ data: data });
                })
                .catch((error) => {
                    res.status(500).send({ error: error });
                });
        }
    }

    const updateDeliveryInfo = async(req, res) => {
        if(req.body && req.params.id){
            await DeliveryInfo.findByIdAndUpdate(req.params.id, { $set: req.body })
                .then((data) => {
                    res.status(200).send({ data: data });
                })
                .catch((error) => {
                    res.status(500).send({ error: error })
                });
        }
    }




module.exports = {
    addDeliveryInfo,
    getDeliveryInfo,
    deleteDeliveryInfo,
    updateDeliveryInfo,
    getDeliveryInfoById
}
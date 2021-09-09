const mongoose = require('mongoose');

//create schema with field names
const DeliverySchema = new mongoose.Schema({
    deliveryid: { type: Number, required: true },
    delbillid: { type: Number, required: true},
    delcustomer: { type: String, required: true, trim: true},
    deldate: { type: String, required: true, trim: true },
    deltime: { type: String, required: true, trim: true },
    deladdress1: { type: String, required: true, trim: true },
    deladdress2: { type: String, required: true, trim: true },
    delcity: { type: String, required: true, trim: true },
    delpostelcode: { type: Number, required: true},
    delvid: { type: Number, required: true },
    delvehtype: { type: String, required: true, trim: true },
    deldriverid: { type: Number, required: true },
    deldriname: { type: String, required: true, trim: true },
    
});

const Delivery = mongoose.model('DeliveryInfomations', DeliverySchema);

module.exports = Delivery;
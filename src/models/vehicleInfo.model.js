const mongoose = require('mongoose');

//create schema with field names
const VehicleSchema = new mongoose.Schema({
    delvid: { type: Number, required: true },
    vregnum: { type: Number, required: true},
    vcategory: { type: String, required: true, trim: true},
    vfuel: { type: String, required: true, trim: true },
    vcapacity: { type: String, required: true, trim: true },
    vdes: { type: String, required: true, trim: true },
    vdate: { type: String, required: true, trim: true },
    
});

const DelVehicleInfo = mongoose.model('vehicleInfomations', VehicleSchema);

module.exports = DelVehicleInfo;
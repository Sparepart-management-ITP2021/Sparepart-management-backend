const mongoose = require('mongoose');

//create schema with field names
const SupplierSchema = new mongoose.Schema({
    supplierId: { type: Number, required: true },
    supplierName: { type: String, required: true, trim: true },
    nic: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phoneNum: { type: Number, required: true },
    country: { type: String, required: true, trim: true },
    companyName: { type: String, required: true, trim: true }
});

const Supplier = mongoose.model('suppliers', SupplierSchema);

module.exports = Supplier;
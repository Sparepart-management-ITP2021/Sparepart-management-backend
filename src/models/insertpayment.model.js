const mongoose = require('mongoose');

//create schema with field names
const insertpaymentSchema = new mongoose.Schema({
    Paymentid: { type: Number, required: true },
    BillType: { type: String, required: true, trim: true },
    BillDate: { type: String, required: true, trim: true },
    BillAmount: { type: Number, required: true },
    Checkedby: { type: String, required: true, trim: true },
});
const Payment = mongoose.model('payments', insertpaymentSchema);

module.exports = Payment;
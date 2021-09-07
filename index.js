const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser")
const dotenv = require("dotenv");

const categoryAPI = require('./src/routes/catogary.api');
const SupplierAPI = require('./src/routes/supplier.route');
const InventoryAPI = require('./src/routes/inventory.route');

dotenv.config();
app.use(bodyParser.json());
app.use(cors());
const MONGODB_URI = process.env.MONGODB_URI;
const port = process.env.PORT;
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => res.send("Hello World!"));

app.use('/category', categoryAPI());
app.use('/supplier', SupplierAPI());
app.use('/inventory', InventoryAPI());

app.listen(port, () => console.log("You are listening to port " + port));
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, dbName: process.env.MONGO_DB})

app.use(cors());
app.use(express.json());

let urlControls = require('./controllers/url_controllers');

app.use('/api/v1/urls', urlControls);

app.get('/', (req, res) => {
    res.redirect('/api/v1/urls');
});

app.listen(port, () => {
    console.log(`server listening on PORT: ${port}`)
});
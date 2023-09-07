const mongoose = require('mongoose');

const { Schema } = mongoose;

const UrlSchema = new Schema({
    "title": { type: String, required: true },
    "category": { type: String, required: true },
    "pageType": { type: String, required: true },
    "url": { type: String, required: true }
});

const Url = mongoose.model('Url', UrlSchema);

module.exports = Url;
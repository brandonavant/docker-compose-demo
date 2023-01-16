require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Initialize Express
const expressPort = 8080;
const app = express();

const Demo = mongoose.model('Demo', new Schema({
    id: String,
    value: String
}, { collection: 'demo-collection'}));

// Connect to the MongoDB instance
mongoose.connect('mongodb://root:root@localhost:27017/demo?authSource=admin');

/**
 * Gets all documents in the "demo-collection" collection.
 */
app.get('/', async (req, res) => {
    try {
        const demoData = await Demo.find();
        res.send(demoData);
    } catch (err) {
        console.err(err);
    }
});

app.listen(expressPort, () => console.log(`Starting express server on port ${expressPort}`));
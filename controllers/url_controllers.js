const express = require('express');
const router = express.Router();

const db = require('../models/Url');

//get all urls 
router.get('/', async (req, res) => {
    try {
        let foundUrls = await db.find();
        res.json(foundUrls);
    } catch (err) {
        console.error(err);
    }
});

//get all urls of specific category
router.get('/:category', async (req, res) => {
    try{
        let foundUrls = await db.find({"category": req.params.category});
        res.json(foundUrls);
    } catch (err) {
        console.error(err);
    }
});

//get all urls of certain page type
router.get('/:category/:pageType', async (req, res) => {
    try {
        let foundUrls = await db.find({
            "category": req.params.category, 
            "pageType": req.params.pageType
        });
        res.json(foundUrls);
    } catch (err) {
        console.error(err);
    }
});

// get specific url
router.get('/:category/:pageType/:id', async (req, res) => {
    try {
        let foundUrl = await db.findById({
            "category": req.params.category, 
            "pageType": req.params.pageType,
            "_id": req.params.id
        });
        res.json(foundUrl);
    } catch (err) {
        console.error(err);
    }
});

// add url
router.post('/', async (req, res) => {
    try {
        let createdUrl = await db.create(req.body);
        res.json(createdUrl);
    } catch (err) {
        console.error(err);
    }
});

// update url
router.put('/:id', async (req, res) => {
    try {
        let updatedUrl = await db.findByIdAndUpdate(req.params.id, req.body, { new: true} );
        res.json(updatedUrl);
    } catch (err) {
        console.error(err);
    }
});

// delete url
router.delete('/:id', async (req, res) => {
    try {
        let deletedUrl = await db.findByIdAndDelete(req.params.id);
        res.json(deletedUrl);
    } catch (err) {
        console.error(err);
    }
});



module.exports = router;

const express = require('express');
const Hotel = require('../schema/Hotel');
const mongoose = require('mongoose');
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        message:"Serving Users on the Endpoint."
    });   
});

router.get("/list", (req, res, next) => {
    Hotel.find({})
        .exec()
        .then(docs => {
            res.status(200).json({
                docs
            });
        })
        .catch(err => {
            console.log(err)
    });
});

router.post("/add", (req, res, next) => {
    console.log("entered to add")
    const hotel = new Hotel({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        city:req.body.city,
        address: req.body.address,
        stars: req.body.stars
    });

    hotel.save()
    .then(result => {
        res.status(200).json({
            docs:[hotel]
        });
    })
    .catch(err => {
        console.log(err);
    });
});

router.post("/delete", (req, res, next) => {
    const rid = req.body.id;

    Hotel.findById(rid)
        .exec()
        .then(docs => {
            docs.remove();
            res.status(200).json({
                deleted:true
            });
        })
        .catch(err => {
            console.log(err)
        });
});

module.exports = router;
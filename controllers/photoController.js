const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Photo
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findAll: function(req, res) {
        db.Photo
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    
    findById: function(req, res) {
        db.Photo
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByUser: function(req, res) {
        db.Photo
        .find({ userName: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Photo
        .findOneAndUpdate({ _id: req.params.id }, {photos: req.body})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    remove: function(req, res) {
        db.Photo
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};
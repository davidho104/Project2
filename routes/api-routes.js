// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET - select all (home)
    app.get("/", function (req, res) {
        // retrieve all the data from the database and res.json them
        // back to the user
        db.burgerseq
            .findAll().then(data => {

                // then name "burgers" is the same in the file index.handlebars
                var obj = {
                    burgers: data
                };

                res.render("index", obj);

            });
    });


    // GET route for select all 
    app.get("/api/burgers", function (req, res) {

        db.burgerseq
            .findAll().then(result => res.json(result));
    });

    // GET - select one
    app.get("/api/burgers/:id", function (req, res) {

        db.burgerseq
            .findOne({ where: { id: req.params.id } }).then(result => res.json(result));
    });


    // POST - insert
    app.post("/api/burgers", function (req, res) {

        db.burgerseq
            .create(req.body).then(results => res.json(results));

    });

    // PUT - update
    app.put("/api/burgers/:id", function (req, res) {
        db.burgerseq
            .update({ devoured: req.body.devoured }, { where: { id: req.params.id } }).then(results => res.json(results));
    });

    // DELETE delete 
    app.delete("/api/burgers/:id", function (req, res) {
        db.burgerseq
            .destroy({ where: { id: req.params.id } }).then(results => res.json(results));
    });

};

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

var db = require("../models");

//Relations
db.role.hasOne(db.user, {
    foreignKey: {
        name: 'permission_id',
        allowNull: true,
    }
});

db.user.hasMany(db.result, {
    foreignKey: {
        name: 'user_id',
        allowNull: false
    }
});

db.quiz.hasMany(db.result, {
    foreignKey: {
        name: 'quiz_id',
        allowNull: false
    }
});

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

    // ---- automentor api routes: user

    // GET route for select all 
    app.get("/api/users", function (req, res) {

        db.user
            .findAll().then(result => res.json(result));
    });

    // GET - select one
    app.get("/api/users/:id", function (req, res) {

        db.user
            .findOne({ where: { id: req.params.id } }).then(result => res.json(result));
    });


    // POST - insert
    app.post("/api/users", function (req, res) {

        db.user
            .create(req.body).then(results => res.json(results));

    });

    // PUT - update
    app.put("/api/users/:id", function (req, res) {
        db.user
            .update({ devoured: req.body.devoured }, { where: { id: req.params.id } }).then(results => res.json(results));
    });

    // DELETE delete 
    app.delete("/api/users/:id", function (req, res) {
        db.user
            .destroy({ where: { id: req.params.id } }).then(results => res.json(results));
    });

    // ---- automentor api routes: quiz

    // GET route for select all 
    app.get("/api/quizzes", function (req, res) {

        db.quiz
            .findAll().then(result => res.json(result));
    });

    // GET - select one
    app.get("/api/quizzes/:id", function (req, res) {

        db.quiz
            .findOne({ where: { id: req.params.id } }).then(result => res.json(result));
    });


    // POST - insert
    app.post("/api/quizzes", function (req, res) {

        db.quiz
            .create(req.body).then(results => res.json(results));

    });

    // PUT - update
    app.put("/api/quizzes/:id", function (req, res) {
        db.quiz
            .update({ devoured: req.body.devoured }, { where: { id: req.params.id } }).then(results => res.json(results));
    });

    // DELETE delete 
    app.delete("/api/quizzes/:id", function (req, res) {
        db.quiz
            .destroy({ where: { id: req.params.id } }).then(results => res.json(results));
    });

    // ---- automentor api routes: resutls

    // GET route for select all 
    app.get("/api/results", function (req, res) {

        db.result
            .findAll().then(result => res.json(result));
    });

    // GET - select one user's result

    app.get("/api/results/:userid", function (req, res) {

        db.result
            .findAll({ where: { user_id: req.params.userid } }).then(result => res.json(result));
    });


    // POST - insert
    app.post("/api/results", function (req, res) {

        db.result
            .create(req.body).then(results => res.json(results));

    });

    // PUT - update
    app.put("/api/results/:id", function (req, res) {
        db.result
            .update({ devoured: req.body.devoured }, { where: { id: req.params.id } }).then(results => res.json(results));
    });

    // DELETE delete 
    app.delete("/api/results/:id", function (req, res) {
        db.result
            .destroy({ where: { id: req.params.id } }).then(results => res.json(results));
    });
};

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var service = require('./test2_moduleA.js')
var exphbs = require('express-handlebars')
var studs = require('./data_prep.js')

app.engine('.hbs', exphbs.engine({ 
    extname: '.hbs',
    defaultLayout: 'main',
}));
app.set('view engine', '.hbs');



//https://drab-lime-harp-seal-cape.cyclic.app
//update
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}


app.get("/", (req, res) => {
    res.render('home');
});

app.get("/allStudents", (req, res) => {
    studs.allStudents().then((data) => res.render("students", { students : data })).catch((err) => {res.render('students', {message : "no results"})})

})

app.get("/BSD", (req, res) => {
    service.getBSD().then((data) => res.render("students", { students : data })).catch((err) => {res.render('students', {message : "no results"})})
});

app.get("/highGPA", (req, res) => {
    service.highGPA().then((data) => res.render("student", { someData: data})).catch((err) => {res.render('student', {message : "no results"})})
});

studs.init()
service.init().then(() => {app.listen(HTTP_PORT, onHttpStart)}).catch(() => {console.log("Error starting server")})

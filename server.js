var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var service = require('./test2_moduleA.js')
//https://drab-lime-harp-seal-cape.cyclic.app
//update
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}

app.get("/", (req, res) => {
    res.send("<div><h2>Declaration</h2><p>I declare that this test is my own work in accordance with Seneca Academic Policy. No part of this test has <br> been copied manually or electronically from any other source <br><br> Name: <span style='background-color: yellow'> Nolan Smith </span> <br><br> Student Number: <span style='background-color: yellow'> 101664217 </span> <br></p><a href=/BSD>Go to BSD</a><br><a href=/highGPA>Go to high GPA</a></div>");
});

app.get("/BSD", (req, res) => {
    service.getBSD().then((data) => {res.send(data)}).catch((err) => {console.log(err)})
});

app.get("/highGPA", (req, res) => {
    service.highGPA().then((data) => {res.send("<h2>Highest GPA</h2><br><a>Student ID: <a>" + data.studId + "<br><br><a>Name: </a>" + data.name + "<br><br><a>Program: </a>" + data.program + "<br><br><a>GPA: </a>" + data.gpa)}).catch((err) => {console.log(err)})
});

service.init().then(() => {app.listen(HTTP_PORT, onHttpStart)}).catch(() => {console.log("Error starting server")})

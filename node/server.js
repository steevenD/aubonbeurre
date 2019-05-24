var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
});
require('./app/router/router.js')(app);

const db = require('./app/config/db.config.js');

const Donnee = db.donnee;
const Automate = db.automate;
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "aubonbeurre"
});

db.sequelize.sync({force: true}).then(() => {
  con.connect(function(err) {
	if (err) {
	    console.log(err);
	    throw err;
    }
  });
  initial();
});

// Create a Server
var server = app.listen(8080, function () {

	var host = server.address().address
	var port = server.address().port

	console.log("App listening at http://%s:%s", host, port)
});

function initial() {

    for (let i = 1; i < 6; i++) {
        Automate.create({
            id: i,
            unite: 1,
            numero: i,
            type: ((i%2) === 0) ? '0X0000BA20' : '0X0000BA2F'
        });
    }


	for (let i = 0; i < 70; i ++){
        Donnee.create({
            id: i,
            tempCuve: ((i%2) === 0) ? 7 : i,
            tempExt: ((i%3) === 0) ? 15 : i + 2,
            poidsLait: i,
            mesurePH: ((i%4) === 0) ? 1 : i + 2,
            mesureK: i,
            concentrationNaCl: ((i%7) === 0) ? 33 : i,
            niveauBacterienSalmonelle: i,
            niveauBacterienEcoli: 12 + i,
            niveauBacterienListeria: i,
            automateId: ((i%2) ===0 )? 1 : 2
        });
    }
}
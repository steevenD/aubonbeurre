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
	Automate.create({
		id: 1,
		unite: 2,
        numero: 1,
        type: 89698
	});
	Automate.create({
		id: 2,
		unite: 2,
        numero: 2,
        type: 4521
	});
	Automate.create({
		id: 3,
		unite: 1,
        numero: 1,
        type: 693
	});
	Automate.create({
		id: 4,
		unite: 2,
        numero: 3,
        type: 7
	});
	Donnee.create({
		id: 1,
        tempCuve: 10,
        poidsLait: 5,
		mesurePH: 5,
		mesureK: 1,
		concentrationNaCl: 12,
		niveauBacterienSalmonelle: 89,
		niveauBacterienEcoli: 13,
		niveauBacterienListeria: 12,
		automateId: 1
	});
}
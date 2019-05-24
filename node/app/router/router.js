var cors = require('cors');

module.exports = function (app) {

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
        next();
    });
    app.use(cors());

	const controller = require('../controller/controller.js');



    app.get('/api/getDonnees/:unite/:numero', controller.getDonnees);
    
	app.get('/api/getAllDonnees/:donnee', controller.getAllDonnees);

};
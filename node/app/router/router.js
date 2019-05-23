
module.exports = function (app) {

	const controller = require('../controller/controller.js');

	app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
		next();
	});

	app.get('/api/getAllAutomate', controller.getAllAutomate);

};
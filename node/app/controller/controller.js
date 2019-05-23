const db = require('../config/db.config.js');
const config = require('../config/config.js');


const Op = db.Sequelize.Op;


var mysql = require('mysql');

const infoDB = require('../config/enum.db.js');

const con = mysql.createPool({
    connectionLimit : 100,
    waitForConnections : true,
    queueLimit :0,
    host     : infoDB.HOST,
    user     : infoDB.USERNAME,
    password : infoDB.PASSWORD,
    database : infoDB.DATABASE,
    debug    :  true,
    wait_timeout : 28800,
    connect_timeout :10
});




/**
 * return all vote per date
 * @param req
 * @param res
 */
exports.getAutomate = (req, res) => {
    // con.connect(function(err) {
    console.log(req.body);
    let date = [];
    var sql = `SELECT * FROM automates where unite =  `;
    con.query(sql, function (err, result) {
        if (err) {
            console.error(err);
            throw err;
        }
        for (let i = 0; i < result.length; i ++){
        	console.log(result);
        }

        res.status(200).send({ 'ok': 'ok'});
        return;
    });
};

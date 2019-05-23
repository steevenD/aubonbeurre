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
 * retourne les donnes d'un automate
 * @param req
 * @param res
 */
exports.getDonnees = (req, res) => {
    var sql = `SELECT id FROM automates where unite = '${req.params.unite}' AND numero = '${req.params.numero}';`;
    con.query(sql, function (err, idAutomate) {
        if (err) {
            console.error(err);
            throw err;
        } else {
            con.query(`SELECT * FROM donnees where automateId = '${idAutomate[0].id}';`, function (err, donneesAutomate, fields) {
                if (err) {
                    console.log(err);
                    throw err;
                } else {
                    res.status(200).send({ 'donnes': donneesAutomate});
                }
            });
        }

        return;
    });
};

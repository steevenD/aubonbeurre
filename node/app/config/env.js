const infoDB = require('./enum.db.js');


const env = {
  database: infoDB.DATABASE,
  username: infoDB.USERNAME,
  password: infoDB.PASSWORD,
  host: infoDB.HOST,
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

 
module.exports = env;


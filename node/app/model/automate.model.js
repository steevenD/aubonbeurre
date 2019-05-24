module.exports = (sequelize, Sequelize) => {
	const Automate = sequelize.define('automates', {
	  id: {
          type: Sequelize.INTEGER,
          primaryKey: true
	  },
	  unite: {
		  type: Sequelize.INTEGER
	  },
      numero: {
		  type: Sequelize.INTEGER
	  },
	  type: {
		  type: Sequelize.STRING
	  }
	});
	
	return Automate;
}
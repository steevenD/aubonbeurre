module.exports = (sequelize, Sequelize) => {
	const Donnees = sequelize.define('donnees', {
	  id: {
        type: Sequelize.INTEGER,
        primaryKey: true
	  },
	  tempCuve: {
		  type: Sequelize.FLOAT
	  },
	  tempExt: {
		  type: Sequelize.FLOAT
	  },
	  poidsLait: {
		  type: Sequelize.FLOAT
	  },
	  mesurePH: {
		  type: Sequelize.FLOAT
	  },
	  mesureK: {
		  type: Sequelize.INTEGER
	  },
	  concentrationNaCl: {
		  type: Sequelize.FLOAT
	  },
	  niveauBacterienSalmonelle: {
		  type: Sequelize.INTEGER
	  },
      niveauBacterienEcoli: {
		  type: Sequelize.INTEGER
	  },
      niveauBacterienListeria: {
		  type: Sequelize.INTEGER
	  }
	});
	
	return Donnees;
};
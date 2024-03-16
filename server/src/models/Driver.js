const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
      id:{type: DataTypes.INTEGER, autoIncrement: true,
      allowNull: false, primaryKey: true, initialValue: 509},
    forename: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    image:{type: DataTypes.STRING, allowNull: false},
    nationality:{type: DataTypes.STRING, allowNull: false},
    dob:{type: DataTypes.DATE, allowNull: false}
  }, {timestamps: false});
};
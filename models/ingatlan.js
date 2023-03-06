'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingatlan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ingatlan.init({
    kategoria: DataTypes.INTEGER,
    leiras: DataTypes.STRING,
    hirdetesDatuma: DataTypes.DATE,
    tehermentes: DataTypes.BOOLEAN,
    ar: DataTypes.INTEGER,
    kepUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ingatlan',
  });
  return Ingatlan;
};
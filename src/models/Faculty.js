'use strict';
const {Model, DataTypes} = require('sequelize');
const sequelize = require('@root/sequelize-config');
class Faculty extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Faculty.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    allowNull: false
  },
  name: {
    type : DataTypes.STRING,
    unique:true,
    allowNull:false
  },
  description: DataTypes.STRING
}, {
  sequelize,
  tableName:'faculties',
  modelName: 'Faculty',
});

module.exports = Faculty;
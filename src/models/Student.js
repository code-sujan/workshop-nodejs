'use strict';
const {
  Model, DataTypes
} = require('sequelize');
const sequelize = require('@root/sequelize-config');
const User = require('@/models/UserModel');

class Student extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Student.init({
  id : {
    type : DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull:true
  },
  name: DataTypes.STRING,
  address: DataTypes.STRING,
  userId: DataTypes.INTEGER
}, {
  sequelize,
  tableName: 'students',
  modelName: 'Student',
});
Student.belongsTo(User, {foreignKey:'userId'});
User.hasOne(Student, {foreignKey:'userId'});
module.exports = Student;
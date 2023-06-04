'use strict';
const {
  Model, DataTypes
} = require('sequelize');
const sequelize = require('@root/sequelize-config');
const User = require('@/models/UserModel');
const Faculty = require('@/models/Faculty');

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
  userId: DataTypes.INTEGER,
  facultyId :{
    type: DataTypes.INTEGER,
    allowNull:false
  }
}, {
  sequelize,
  tableName: 'students',
  modelName: 'Student',
});
Student.belongsTo(User, {foreignKey:'userId'});
User.hasOne(Student, {foreignKey:'userId'});

Student.belongsTo(Faculty, {foreignKey:'facultyId'});
Faculty.hasMany(Student, {foreignKey: 'facultyId'});

module.exports = Student;
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('@root/sequelize-config');
class User extends Model {}
User.init({
    id : {
        type: DataTypes.BIGINT,
        primaryKey : true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address : {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Not-Set'
    },
    username : {
      type: DataTypes.STRING,
      allowNull : false
    },
    password : {
      type : DataTypes.STRING,
      allowNull : false
    }
  }, {
    sequelize, 
    tableName: 'users',
    modelName: 'User' 
  });
User.sync({alter: true});
module.exports = User;

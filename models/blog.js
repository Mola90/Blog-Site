// const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
// const sequelize = require('../config/connection');

class Blog extends Model {
    checkPassword(loginPw){
      return bcrypt.compareSync(loginPw, this.password);
    }
  }
  
  Blog.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      Title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Content: {
        type: DataTypes.STRING,
        allowNull: false,        
      },
      Creator: {
        type: DataTypes.STRING,
        allowNull: false,        
      },
      Comments: {
        type: DataTypes.STRING,
        allowNull: false,        
      },
    },
  //   {
  //     hooks: {
  //       beforeCreate: async (newUser) => {
  //         try {
  //           newUser.password = await bcrypt.hash(newUser.password, 10);
  //           return newUser;
  //         } catch (err) {
  //           console.log(err);
  //           return err;
  //         }
  //       },
  //       beforeUpdate: async (updatedUser) => {
  //         try {
  //           updatedUser.password = await bcrypt.hash(
  //             updatedUser.password,
  //             10
  //           );
  //           return updatedUser;
  //         } catch (err) {
  //           console.log(err);
  //           return err;
  //         }
  //       },
  //     },
  //     sequelize,
  //     timestamps: true,
  //     freezeTableName: true,
  //     underscored: true,
  //     modelName: 'user',
  //   }
  );
  
  module.exports = Blog;
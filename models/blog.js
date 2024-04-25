const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
      {
      sequelize,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      modelName: 'blog',
    }
  );
  
  module.exports = Blog;
require('dotenv').config();

const {Sequelize} = require('sequelize');

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   :
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true
      },
      logging: false
    });

module.exports = sequelize;

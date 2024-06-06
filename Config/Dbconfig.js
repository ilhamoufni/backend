const {Sequelize} = require("sequelize")
const sequelize = new Sequelize(
    'urbain',
    'root',
    '',
    {host: 'localhost', dialect: 'mysql'}
)


module.exports = sequelize
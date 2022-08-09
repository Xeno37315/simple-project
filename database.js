import Sequelize from "sequelize";

const database = new Sequelize(
    'movies_online',
    'root',
    'password',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)

export default database;
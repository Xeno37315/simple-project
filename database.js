import Sequelize from "sequelize";

const database = new Sequelize(
    'movies_online',
    'root',
    '1W0n7Bl%n9',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)

export default database;
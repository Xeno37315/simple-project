    import Sequelize from "sequelize";
    import database from '../database';

    const Movies = database.define('movies', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        movieName: Sequelize.STRING,
        movieDescription: Sequelize.STRING,
        movieGenere: Sequelize.STRING,
        movieLength: Sequelize.INTEGER,
        rating: Sequelize.INTEGER,
        year: Sequelize.INTEGER,
        director: Sequelize.STRING
    });

    export default Movies
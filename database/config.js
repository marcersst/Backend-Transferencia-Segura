const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGOD, {
            useNewUrlParser: true
        });
        console.log('Base de datos conectada');
    } catch (error) {
        console.error('Error al conectar base de datos:', error);
        throw new Error('Error al conectar base de datos');
    }
};

module.exports = {
    dbConnection
};


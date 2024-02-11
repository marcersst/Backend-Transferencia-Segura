const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');


class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.transferenciasPath = '/api/transferencias';

       //Conectar a base de datos
        this.conectarDB();


        this.middlewares();


        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {
        this.app.use( cors() );

        // lectura y parseo del body
        this.app.use( express.json() );


    }

    routes() {
        this.app.use( this.transferenciasPath, require('../routes/transferencias'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;

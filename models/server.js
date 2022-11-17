const express = require("express");
const cors = require("cors");
const {dbConnection} = require("../database/config");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuario";
    this.librosPath = "/api/libros";
    this.asigSancionesPath = "/api/asigSancion";
    this.reservasPath = "/api/reservas";
    this.middlewares();
    this.routes();
    this.dbConectar(); //Metodo conectar 
  }

  ///METODO PARA ESPERAR CONEXION
  async dbConectar(){
    await dbConnection()
  }

  middlewares() {
    //Otras funcionalidades
    this.app.use(cors());
    this.app.use(express.static("public"));
    this.app.use(express.json());
  }
  routes() {
    //Rutas de la aplicación
    this.app.use(this.usuariosPath, require("../routes/usuario"));
    this.app.use(this.librosPath, require("../routes/libros"));
    this.app.use(this.asigSancionesPath, require("../routes/asigSancion"));
    this.app.use(this.reservasPath, require("../routes/reservas"));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Escuchando por el puerto ${this.port}`);
    });
  }
}
module.exports = Server;


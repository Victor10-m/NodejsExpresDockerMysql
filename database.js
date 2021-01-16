const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host: '127.0.0.1',
    port: '3307',
    user: 'root',
    password: 'root',
    database: 'tienda',
});

async function getConnection(){
    try {
        const connection = await pool.getConnection();
        return connection;
    } catch (error) {
        console.log('Error de conexion de base de datos: ', error);
    }
}

module.exports = {getConnection};
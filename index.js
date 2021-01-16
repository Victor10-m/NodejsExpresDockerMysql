const express = require('express')
const app = express()

const pool = require('./database')
app.get('/producto', async (req, res) => {
    try {

        const conn = await pool.getConnection();
        const query = 'select * from producto';
        const rows = await conn.query(query);
        res.status(200).json(rows);

    } catch (error) {
        console.log('Error en la ruta producto: ', error);
    }
});
app.post('/nuevoproducto', async (req, res) => {
    try {

        const conn = await pool.getConnection();
        const query = 'insert into producto value (?)';
        const resultado = await conn.query(query, [req.body.name]);
        res.status(200).json(resultado);

    } catch (error) {
        console.log('error en ruta nuevo producto: ', error)
    }
});

app.listen(3000, () => {
    console.log('servidor ejecutado en puerto: ', 3000);
});
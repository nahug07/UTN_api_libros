const express = require('express');
const app = express();
app.use(express.json());

// Importo el Router de Libros
const librosRouter = require('./routes/libros');

// Importo el Middleware Error Handler
const errorHandler = require('./middlewares/errorHandler');

app.use('/libros', librosRouter);

app.use(errorHandler);

app.listen(3002, () => {
console.log('Servidor iniciado en el puerto 3002');
});
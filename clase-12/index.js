import express from 'express';
import cors from 'cors';
import productsRouter from './src/routes/products.routes.js';

const app = express();
const PORT = 3000;

// Middlewares globales
app.use(cors());
app.use(express.json()); // necesario para leer req.body en el POST

// Rutas simples que quedan en el archivo principal
app.get('/', (req, res) => {
  res.send('<h1>Bienvenid@ a nuestra API</h1>');
});

app.get('/ping', (req, res) => {
  res.type('text/plain').send('/pong');
});

// Routers (todas las rutas de productos cuelgan de /api)
app.use('/api', productsRouter);

// Middleware 404: siempre al final
app.use((req, res) => {
  res.status(404).send('Recurso no encontrado');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

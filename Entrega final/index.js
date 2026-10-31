import express from "express";
import cors from "cors";
import productsRoutes from "./src/routes/products.routes.js";

const app = express();
const PORT = 3000;

// Middleware globales
app.use(cors());
app.use(express.json());

// Rutas simples que quedan en el archivo principal
app.get("/", (req, res) => {
  res.send("Bienvenid@ a nuestra API");
});

app.get("/ping", (req, res) => {
  res.type("text/plain").send("/pong");
});

// Rutas
app.use("/api", productsRoutes);

app.use((req, res) => {
  res.status(404).send({ error: "Recurso no encontrado" });
});

app.listen(PORT, () => {
  console.log(`Servicio corriendo en http://localhost:${PORT}`);
});

¡Cómo funciona el código?
process.argv.slice(2) descarta los dos primeros elementos (ruta de node y del script) y nos deja solo lo que el usuario escribió.
Usamos destructuring (const [method, resource, ...rest] = ...) para separar el comando (GET/POST/DELETE), el recurso (products o products/15) y el resto de los parámetros.
Como resource puede venir como products o products/15, simplemente lo concatenamos a la URL base — no hace falta lógica extra, el propio string ya trae el id cuando corresponde.
Para el POST, armamos el objeto nuevoProducto con los tres parámetros restantes (title, price, category), convirtiendo price a número con Number().

Para probar en la terminal:
# Consultar todos los productos
npm run start GET products

# Consultar un producto específico
npm run start GET products/15

# Crear un producto nuevo
npm run start POST products T-Shirt-Rex 300 remeras

# Eliminar un producto
npm run start DELETE products/7
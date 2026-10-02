const BASE_URL = 'https://fakestoreapi.com'; // declaro la URL de la API

// Capturamos los argumentos ingresados por terminal
const [method, resource, ...rest] = process.argv.slice(2);// Desestructuramos el array de argumentos para obtener el método, recurso y resto de argumentos

async function main() {
  try {
    let response; // Es let para poder reasignarla en cada caso posteriormente dentro del blq 

    if (method === 'GET') {
      response = await fetch(`${BASE_URL}/${resource}`);
      const data = await response.json();
      console.log(data);// la respuesta de la API se guarda en la variable response con el método GET y se imprime en consola

    } else if (method === 'POST') {
      // rest = [title, price, category]
      const [title, price, category] = rest;// Desestructuramos el array de argumentos restantes para obtener el título, precio y categoría del nuevo producto

      const nuevoProducto = { title, price: Number(price), category };// Creamos un objeto con los datos del nuevo producto, convirtiendo el precio a número

      response = await fetch(`${BASE_URL}/${resource}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoProducto),
      }); // la respuesta de la API se guarda en la variable response con el método POST y el body con los datos del nuevo producto

      const data = await response.json();
      console.log(data); 

    } else if (method === 'DELETE') {
      response = await fetch(`${BASE_URL}/${resource}`, {
        method: 'DELETE',
      }); // la respuesta de la API se guarda en la variable response con el método DELETE

      const data = await response.json();
      console.log(data);

    } else {
      console.log('Comando no reconocido. Usa GET, POST o DELETE.'); // si el método ingresado no es GET, POST o DELETE, se muestra un mensaje de error
    }

    if (response && !response.ok) {
      console.error(`Error HTTP: ${response.status}`);
    }// si la respuesta de la API no es ok, se muestra un mensaje de error con el código de estado HTTP

  } catch (error) {
    console.error('Hay un error con la solicitud:', error);// si hay un error con la solicitud, se muestra un mensaje de error
  }
}

main();
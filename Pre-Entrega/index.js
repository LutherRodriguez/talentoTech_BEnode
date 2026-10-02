const BASE_URL = 'https://fakestoreapi.com';

// Capturamos los argumentos ingresados por terminal
const [method, resource, ...rest] = process.argv.slice(2);

async function main() {
  try {
    let response;

    if (method === 'GET') {
      response = await fetch(`${BASE_URL}/${resource}`);
      const data = await response.json();
      console.log(data);

    } else if (method === 'POST') {
      // rest = [title, price, category]
      const [title, price, category] = rest;

      const nuevoProducto = { title, price: Number(price), category };

      response = await fetch(`${BASE_URL}/${resource}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoProducto),
      });

      const data = await response.json();
      console.log(data);

    } else if (method === 'DELETE') {
      response = await fetch(`${BASE_URL}/${resource}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      console.log(data);

    } else {
      console.log('Comando no reconocido. Usa GET, POST o DELETE.');
    }

    if (response && !response.ok) {
      console.error(`Error HTTP: ${response.status}`);
    }

  } catch (error) {
    console.error('Hay un error con la solicitud:', error);
  }
}

main();
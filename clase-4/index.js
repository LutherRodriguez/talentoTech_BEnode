// Objetos
//Ejercicios:
// 1. Crea un array con 10 objetos donde cada uno represente un automóvil con esta información: Marca, Modelo, Año, Color
const autos = [
  { marca: "Toyota", modelo: "Corolla", año: 2012, color: "Rojo" },
  { marca: "Honda", modelo: "Civic", año: 2019, color: "Azul" },
  { marca: "Ford", modelo: "Mustang", año: 2021, color: "Negro" },
  { marca: "BMW", modelo: "Serie 3", año: 2010, color: "Blanco" },
  { marca: "Mercedes", modelo: "C-Class", año: 2018, color: "Gris" },
  { marca: "Audi", modelo: "A4", año: 2021, color: "Negro" },
  { marca: "Nissan", modelo: "Altima", año: 2015, color: "Rojo" },
  { marca: "Hyundai", modelo: "Elantra", año: 2019, color: "Azul" },
  { marca: "Kia", modelo: "Optima", año: 2021, color: "Blanco" },
  { marca: "Subaru", modelo: "Outback", año: 2020, color: "Gris" },
];
// 2. Usa in método de array para recorrer la lista e imprime por consola todos los datos de los automoviles cuyo año sea mayor a 2018
const autosFiltrados = autos.filter((auto) => auto.año > 2018);
console.log(autosFiltrados);

// 3. Crea una función que recorra el array. Con el operador destructuring dentro de la función para obtener el color de cada auto. La función debe aceptar un color como parámetro y devolver por consola cuántos automóviles tienen ese color
function contarAutosPorColor(color) {
  let count = 0;
  autos.forEach(({ color: autoColor }) => {
    if (autoColor === color) {
      count++;
    }
  });
  console.log(`Número de autos de color ${color}: ${count}`);
}

contarAutosPorColor("Rojo");
contarAutosPorColor("Azul");
contarAutosPorColor("Negro");
contarAutosPorColor("Blanco");
contarAutosPorColor("Gris");

// Clase 3: Funciones en JavaScript
/*
// Función declarada : El nombre de la función es obligatorio
function add() {
    return 10 + 10;
}
// Función expresada: Es anónima, no tiene nombre
const add = function() {
    return 10 + 10;
}

// Función tradicional: Se puede declarar con la palabra reservada function
function subtract() {
    return 20-10;
}

const result = subtract();
console.log(result);    
//Funciones de flecha (Arrow Functions): Son una forma más concisa de escribir funciones en JavaScript. Se utilizan principalmente para funciones anónimas y no tienen su propio contexto de this.
const subtract = () => 20 - 10;
const result = subtract();
console.log(result);
*/
// Función con parámetros: Se pueden pasar valores a las funciones mediante parámetros.
const multiply =(a, b) => a * b;

const divide = (a, b) => a / b;

const add = (a, b) => a + b;

const subtract = (a, b) =>a - b;

// creo una función de orden superior que recibe otra función como parámetro (callback)
function calculate(a, b, operation) {
    return operation(a, b);
}
calculate(10, 5, multiply); // 50
calculate(10, 5, divide); // 2
calculate(10, 5, add); // 15
calculate(10, 5, subtract); // 5

const resultMultiply = calculate(10, 5, multiply);
console.log(resultMultiply); // 50 
const resultDivide = calculate(10, 5, divide);
console.log(resultDivide); // 2
const resultAdd = calculate(10, 5, add);
console.log(resultAdd); // 15
const resultSubtract = calculate(10, 5, subtract);
console.log(resultSubtract); // 5

//-----------------------------------
/*
// Arrays
const frutas = ['manzana', 'pera', 'frutilla', 'durazno'];
console.log(frutas[0]); // manzana
console.log(frutas.at(1)); // pera
console.log(frutas.at(-1)); // durazno -> me trae el último elemento del array
// Métodos de arrays
// push: Agrega un elemento al final del array
frutas.push('banana');
console.log(frutas); // ['manzana', 'pera', 'frutilla', 'durazno', 'banana']
// unshift: Agrega un elemento al inicio del array
frutas.unshift('kiwi');
console.log(frutas); // ['kiwi', 'manzana', 'pera', 'frutilla', 'durazno', 'banana']
// pop: Elimina el último elemento del array
frutas.pop();
console.log(frutas); // ['kiwi', 'manzana', 'pera', 'frutilla', 'durazno']
// shift: Elimina el primer elemento del array
frutas.shift();
console.log(frutas); // ['manzana', 'pera', 'frutilla', 'durazno']
//join: Une todos los elementos del array en un string
const frutasString = frutas.join('-');
console.log(frutasString); // 'manzana-pera-frutilla-durazno'
// slice: Devuelve una copia de una parte del array
const frutasSlice = frutas.slice(1, 3);
console.log(frutasSlice); // ['pera', 'frutilla']
// splice: Elimina elementos del array y opcionalmente los reemplaza con otros elementos
frutas.splice(1, 2, 'naranja', 'mandarina');
console.log(frutas); // ['manzana', 'naranja', 'mandarina', 'durazno']
// .forEach: Itera sobre cada elemento del array y ejecuta una función para cada uno
frutas.forEach((fruta, index) => {
    console.log(`Fruta ${index + 1}: ${fruta}`); // Fruta 1: manzana, Fruta 2: naranja, Fruta 3: mandarina, Fruta 4: durazno
});
frutas.forEach((fruta) => console.log(fruta)); // manzana, naranja, mandarina, durazno
// .map: Crea un nuevo array con los resultados de la función aplicada a cada elemento del array original
const frutasMayusculas = frutas.map((fruta) => fruta.toUpperCase());
console.log(frutasMayusculas); // ['MANZANA', 'NARANJA', 'MANDARINA', 'DURAZNO']
*/
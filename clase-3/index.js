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
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
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

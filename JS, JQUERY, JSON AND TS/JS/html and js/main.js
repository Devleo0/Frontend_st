/*alert('hello world');

let num1 = prompt('digite um número');
let num2 = prompt('digite um número');
 num1 = Number(num1);
 num2 = Number(num2);

alert(`O resultado é: ${num1 + num2}`);
*/

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A


/*
let varAux1;
varAux1 = varA;
varA = varB;
varB = varC;
varC = varAux1;
*/

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
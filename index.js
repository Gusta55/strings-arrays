/*

//Exercicio 1

let array
console.log('a. ', array)//undefined

array = null
console.log('b. ', array)//null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)//10

let i = 0
console.log('d. ', array[i])//3

array[i+1] = 19
console.log('e. ', array)//19

const valor = array[i+6]
console.log('f. ', valor)//10
*/

/*
//Exercicio 2

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//Vai printar a frase toda em maiusculo irá trocar todos os a por i e vai mostrar o tamanho do texto contando os espaços

//"Subi num ônibus em Marrocos" ficará "SUBI NUM ONIBUS EM MIRROCOS. 27"
*/

//Exercicio 3
const nomeDoUsuario = prompt("Digite o seu nome: ");
const emailDoUsuario = prompt("Digite o seu e-mail: ");
console.log(`Seu nome é ${nomeDoUsuario}, e seu e-mail é ${emailDoUsuario}`);

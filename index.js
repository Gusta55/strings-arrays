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
console.log('f. ', valor)//9
*/

/*
//Exercicio 2

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//Vai printar a frase toda em maiusculo irá trocar todos os a por i e vai mostrar o tamanho do texto contando os espaços

//"Subi num ônibus em Marrocos" ficará "SUBI NUM ONIBUS EM MIRROCOS. 27"
*/
/*
//Exercicio 3
const nomeDoUsuario = prompt("Digite o seu nome: ");
const emailDoUsuario = prompt("Digite o seu e-mail: ");
console.log(`Seu nome é ${nomeDoUsuario}, e seu e-mail é ${emailDoUsuario}`);
*/

/*
//Exercicio 4
const comidasFavoritas = ["batata_frita", "hamburguer", "lasanha", "xis", "pizza"];
const comidasFavoritasUsuario = prompt("Digite sua comida favorita: ");
comidasFavoritas[1] = comidasFavoritasUsuario;
console.log(comidasFavoritas);
ocnsole.log("Suas comidas favoritas são: "
${comidasFavoritas[0]},
${comidasFavoritas[0]},
${comidasFavoritas[0]},
${comidasFavoritas[0]},
${comidasFavoritas[0]},
);
*/

/*
//Exercicio 5
const listaDeTarefas = [];

listaDeTarefas[0] = prompt("Digite umas tarefa para o dia: ");
listaDeTarefas[1] = prompt("Digite umas tarefa para o dia: ");
listaDeTarefas[2] = prompt("Digite umas tarefa para o dia: ");

console.log(`Tarefa 1: ${listaDeTarefas[0]}`);
console.log(`Tarefa 2: ${listaDeTarefas[1]}`);
console.log(`Tarefa 3: ${listaDeTarefas[2]}`);

let excluirTarefa = prompt("Digite o numero da tarefa ja completada 1, 2 ou 3: ");
excluirTarefa -= 1;
listaDeTarefas.splice(excluirTarefa, 1);


console.log(listaDeTarefas);
*/

/*
//Desafios 1

let array = [];

const novasPalavras = prompt("Digite uma frase: ");

array = novasPalavras.split(" ");

console.log(array)
*/

//Desafio 2

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
console.log("o indice de abacaxi é: ", frutas.indexOf("Abacaxi"), "O tamanho da array é: ", frutas.length);


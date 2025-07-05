const prompt = require("prompt-sync")();

let idade, media=0;
const tamanho = 10;

for (let index = 0; index < tamanho; index++) {
    idade = Number(prompt("Informe a idade: "));
    media = media + idade;
}

media = media/tamanho;
console.log("A media das idades informadas é : "+media);
const prompt = require("prompt-sync")();

let nota1=3.8;

if(nota1 >= 7){
    console.log("O aluno foi aprovado");
}else if(nota1 >= 4){
    console.log("O aluno ficou de exame");
}else{
    console.log("O aluno foi reprovado");
}
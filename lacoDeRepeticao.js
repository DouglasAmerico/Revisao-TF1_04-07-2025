const prompt = require("prompt-sync")();
let idade;

do{
    idade = prompt("Informe a idade: ");
    if(idade < 0 || idade > 120){
        console.log("Informe uma idade enter 0 e 120");
    }
}while(idade < 0 || idade > 120);

console.log("A idade informada e validada é "+idade);
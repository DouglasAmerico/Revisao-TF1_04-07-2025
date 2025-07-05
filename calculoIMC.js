//Cálculo do IMC:
//IMC = Peso (kg) / (Altura (m) * Altura (m)) 
//Abaixo do peso: IMC menor que 18,5 
//Peso normal: IMC entre 18,5 e 24,9 
//Sobrepeso: IMC entre 25,0 e 29,9 
//Obesidade: IMC igual ou maior que 30 
//Obesidade grau I: IMC entre 30 e 34,9 
//Obesidade grau II: IMC entre 35 e 39,9 
//Obesidade grau III ou mórbida: IMC igual ou maior que 40 
const prompt = require("prompt-sync")();
let peso = prompt("Informe o peso em kg: ");
let altura = prompt("Informe a altura em metro: ");

let imc = peso / Math.pow(altura,2);

if(imc < 18.5){
    console.log("Com IMC de "+imc+" Abaixo do peso");
}else if(imc <= 24.9){
    console.log("Com IMC de "+imc+" Peso normal");
}else if(imc <= 29.9 ){
    console.log("Com IMC de "+imc+" Sobrepeso");    
}else if(imc <= 34.9){
    console.log("Com IMC de "+imc+" Obesidade grau I");        
}else if(imc <= 39.9){
    console.log("Com IMC de "+imc+" Obesidade grau II");        
}else{
    console.log("Com IMC de "+imc+" Obesidade grau III");        
}
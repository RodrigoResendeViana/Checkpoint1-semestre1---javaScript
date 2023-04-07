//exercício 1:

document.write('Exercício 1:<br>');
let variavelex1;
document.write(typeof variavelex1,"<br><br>");

//exercício 2:

document.write('Exercício 2:<br>');
let numero1 = 10;
let numero2 = 3;

let resultado = numero1 % numero2;

document.write("O resto da divisão de 10 por 3 é ", resultado, "<br><br>");

//exercício 3:

document.write("Exercício 3:<br>")

let altura = prompt('Digite sua altura: ');
let peso = prompt('Digite seu peso: ');

let imc = peso / (altura * altura);

if(imc < 18.5) {
    document.write("Seu IMC é ", imc.toFixed(2), "<br>De acordo com seu IMC, você está abaixo do seu peso ideal<br><br>")
}else if(imc >= 18.5 && imc <= 24.9) {
    document.write("Seu IMC é ", imc.toFixed(2), "<br>De acordo com seu IMC, você está com o peso ideal<br><br>")
}else{
    document.write("Seu IMC é ", imc.toFixed(2), "<br>De acordo com seu IMC, você está acima do seu peso ideal<br><br>")
}

//Exercício 4:

document.write('Exercício 4:<br>');

let idade = (prompt("Digite a sua idade:"));

if (idade <= 12) {
    document.write("Você é uma criança.<br><br>");
} else if (idade <= 18) {
    document.write("Você é um adolescente.<br><br>");
} else if (idade <= 60) {
    document.write("Você é um adulto.<br><br>");
} else {
    document.write("Você é um idoso.<br><br>");
}


























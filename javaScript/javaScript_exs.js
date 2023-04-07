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

//Exercício 5:

document.write('Exercício 5:<br>')

let nome_usuario = "admin";
let senha_usuario = "1234";

let inserir_usuario = prompt('Digite seu nome de usuário: ')
let inserir_senha = prompt('Digite sua senha: ')

if (nome_usuario == inserir_usuario & senha_usuario == inserir_senha){
    document.write('Login realizado com sucesso!<br><br>')
}else{
    document.write('Falha de autenticação: nome de usuário e/ou senha incorretos.<br><br>')
}

//Exercício 6:

document.write('Exercício 6:<br>');

nota1 = parseFloat(prompt('Vamos calcular sua média. Digite suas notas     Nota 1:'));
nota2 = parseFloat(prompt('Nota 2:'));
nota3 = parseFloat(prompt('Nota 3:'));
nota4 = parseFloat(prompt('Nota 4:'));
nota5 = parseFloat(prompt('Nota 5:'));
nota6 = parseFloat(prompt('Nota 6:'));
nota7 = parseFloat(prompt('Nota 7:'));

let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7;
media = media.toFixed(2)

document.write('A sua média foi ', media,"<br><br>");

//Exercício 7:

document.write('Exercício 7:<br>')
document.body.style.backgroundColor = "blueviolet";

let nome = "Caique Chagas"
let idade2= 18;
let curso= "Engenharia de Software"
let ano= 2023

document.write("Nome: ",nome,"<br>")
document.write("Idade: ",idade2,"<br>")
document.write("Curso: ",curso,"<br>")
document.write("Ano: ",ano,"<br><br>")





















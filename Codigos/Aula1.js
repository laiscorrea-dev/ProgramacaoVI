console.log("Olá Mundo JavaScript!");

var nome= "Lais Correa"
var idade = 18;
console.log("Nome: "+ nome +" \n Idade: "+ idade) // contatenar

function CheckIdade(){
  if (idade>=18) {
    console.log('Maioridade!')
}
  else{
    console.log("Menoridade!")
}
}
CheckIdade();

/* Crie um vetor com 5 notas, em seguida crie um laço de repetição para
imoprimir as notas, em seguida faça a média das notas, e diga realizar se 
o aluno foi aprovado ou não. OBS: média = 6; */
var notas = [ 5, 8, 9, 6, 7]
var soma = 0
for (let i=0; i<notas.length; i++){
  console.log(notas[i])
  soma+=notas[i]
}
var media = soma/ notas.length
console.log("Soma: "+ soma)
console.log("Média: "+ media)
  if(media>=6){
    console.log("Aprovado")}
  if(media<6){
    console.log("Reprovado")
  }

  //aula 25.02.2026 
//imprima todas as idades do vetor

let idades = [10, 15, 20, 18, 17]
let nomes = ['lais', 'miguel', 'yanni']
let notas = [5,6,7,10,9,8]
let cont = 0
while(cont < 6){ // imprimindo as notas
  console.log(notas[cont])
  cont++
}
for(let i=0; i<idades.length; i++){ // percorrendo o vetor idades e imprimindo os de maior(>18)
 if (idades[i]>=18){
    console.log(idades[i])
  }
}

console.log("Exemplo laço de repetição convencional!")
for(let indice in nomes){
  console.log(nomes[indice])
}

//Funções

function soma(a,b){ // normal 
  return a+b;
}

var sub = function(x,y){ // anonima
  return x-y;
}

let mult = (d,c) => {return d*c} // arrow

console.log(soma(5,3))
console.log(sub(11,4))
console.log(mult(5,4))

//crie uma função anonima para mostrar as idades do vetor idades maior que 18
// crie uma arrow function para imprimir na tela do vetor notas, as notas maoires que 6
let mostraridade = function (idades) {
  for(let i=0; i<idades.length; i++){ // percorrendo o vetor idades e imprimindo os de maior(>18)
 if (idades[i]>=18){
    console.log(idades[i])
   }
  }
}
console.log("Idades")
mostraridade(idades);
console.log("Notas")

let mostrarnotas = (notas) => {
  for(let indice in notas){
    if(notas[indice]>6)
    console.log(notas[indice])
  }
}
mostrarnotas(notas);
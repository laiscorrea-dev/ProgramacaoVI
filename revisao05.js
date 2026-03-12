import {Pessoa} from "./revisao_funcoes/Pessoa.js";
import{Conta} from "./conta.js";


let p1 = new Pessoa("Lais",10,"99025942");
let p2 = new Pessoa("Tainá",9,"99025942");

try{
    p1.verificarIdade();
} catch(error){
    console.log(error);
}

let c1= new Conta(p1);
let c2= new Conta(p2);

c1.depositar(1500);
c2.depositar(3000);

console.log("Início")
console.log(c1.pessoa.nome + " - R$" + c1.saldo);
console.log(c1.pessoa.nome + " - R$" + c1.saldo);


try{ //detectar um erro
    c1.sacar(100);
    c2.sacar(1500);
} catch(error) {
    console.log(error);
}

try{
    c2.sacar(1900);
}catch(error){
    console.log(error);
}

try{
    c1.tranferir(c2, 1200);
}  catch (error){
    console.log(error);
}
console.log("------ Extrato Final-----");
c1.exibirHistorico();
console.log("--------------------");
c2.exibirHistorico();


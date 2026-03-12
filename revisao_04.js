import {Pessoa} from "./revisao_funcoes/Pessoa.js";
import{Conta} from "./conta.js";


let p1 = new Pessoa("Lais",10,"99025942");

try{
    p1.verificarIdade();
} catch(error){
    console.log(error);
}

let c1= new Conta("Lais");
let c2= new Conta("Maria");

c1.depositar(2000);
c2.depositar(3000);


console.log(`${c1.titular} - ${c1.saldo}`);
console.log(`${c2.titular} - ${c2.saldo}`);

try{ //detectar uma erro

c1.sacar(1900);
c2.sacar(1000);

} catch(error) {
    console.log("Error: "+ error);

}

console.log("Transação 01 ");
console.log(`${c1.titular} - ${c1.saldo}`);
console.log(`${c2.titular} - ${c2.saldo}`);

try{
    c2.tranferir(c1, 8800);

}  catch (error){
    console.log("Error: " + error);
}

console.log("Transação 02 ");
console.log(`${c1.titular} - ${c1.saldo}`);
console.log(`${c2.titular} - ${c2.saldo}`);


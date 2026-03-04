//exportar a classe Conta como módulo ES6
export class Conta{
constructor(titular ){
    this.titular= titular;
    this.saldo = 0;
}
    depositar (valor) {
        this.saldo += valor;
    }
    sacar(valor){
        if(valor>this.saldo){
            throw "Saldo Insuficiente"
        }
        this.saldo-= valor;
    }

    tranferir (outraConta, valor){
        if(valor> this.saldo){
            throw("Saldo Insuficiente");
        }
        this.sacar(valor);
        outraConta.depositar(valor);
    }
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

//exportar a classe Conta como módulo ES6
export class Conta{
constructor(pessoa){
    this.pessoa = pessoa;
    this.saldo = 0;
    this.historico=[];
}
    depositar (valor) {
        this.saldo += valor;
        this.historico.push("Depositar + R$ " + valor.toFixed(2)) // armazenar um valor dentro do vetor, retorna o valor quase inteiro.
    }
    sacar(valor){
        if(valor>this.saldo){
            throw "Saldo Insuficiente"
        }
        this.saldo -= valor;
        this.historico.push("Sacar  -R$ " + valor.toFixed(2))
    }

    tranferir (outraConta, valor){
        // if(valor> this.saldo){
        //     throw("Saldo Insuficiente");

        // }
        this.sacar(valor);
        outraConta.depositar(valor);
        

        this.historico[this.historico.length -1] = 
        "Transferência enviar de " + outraConta.pessoa.nome +": -R$ " + valor.toFixed(2); //deixar no histórico na outra pessoa a transferencia 

        outraConta.historico[outraConta.historico.length -1] = 
        "Transferência recebida de " + this.pessoa.nome +": +R$ " + valor.toFixed(2); // deixar no histórico da pessoa a transferencia
    }
    exibirSaldo(){
        console.log(`${this.pessoa.nome} - Saldo: R$ ${this.saldo}`);
    }

   exibirHistorico(){
    console.log(`-------- Histórico de ${this.pessoa.nome} ----------`);
    if(this.historico.length == 0 ){
        console.log("Nenhuma operação realizada");
    }
    else{
        for( let operacao in this.historico){
            console.log("  " + this.historico[operacao]);

        }
    }
    console.log(` Saldo atual: R$ ${this.saldo.toFixed(2)}`);
   } 
}

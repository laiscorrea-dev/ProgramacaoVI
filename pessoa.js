/*crie ua nova classe chamada pessoa,com os atributos: nome, idade, e 
telefone método para verificar se é de menor ou não
*/
export class Pessoa{
    constructor(nome, idade ,telefone){
        this.nome= nome;
        this.idade = idade;
        this.telefone= telefone;
    }

    verificarIdade(){
        if(this.idade<18){
            throw this.nome +" "+ this.idade + " - Pessoa menor de idade"; 
        }
        else{
            throw this.nome+" "+ this.idade +  " - Pessoa de maior";
        }
    }


}
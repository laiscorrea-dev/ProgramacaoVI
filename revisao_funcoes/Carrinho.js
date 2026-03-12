export class Carrinho{
    constructor(cliente){
        this.cliente=cliente;
        this.itens=[ ];

    }
    addProduto(produto){
        this.itens.push(produto);
    }

    calcularTotal(){
        let total=0;
        for(let i in this.itens){ //ec
            total+= this.itens[i].preco;
        }
        return total;
    }
    exibirResumo(){
        console.log(`Cliente : ${this.cliente.nome}`);
        console.log(`Telefone : ${this.cliente.telefone}`);
        /*
        for(let i in this.itens){
            console.log(`${this.itens[i].nome} - R$ ${this.itens[i].preco}`); //  mostrar o nome e o preço do produto de acordo com o cliente.
        } */
       this.itens.map(function(item){
        console.log(` ${itens.nome} - R$ ${itens.preco} `);
       });
        console.log(`Total: R$ ${this.calcularTotal().toFixed(2)}`);
        console.log("---------------------------------------");
    }

    /* Faça o filtro dos produtos por cliente através do preço */

    filtarProduto(valorMin = 0, valorMax = 0){ // filtar  maior e menor valor do preço
      
        let filtrados = this.itens.filter(function(item){
            item.preco >= valorMin && item.preco <=valorMax;        
        });
        filtrados.map(function(item){
            console.log(`${item.nome} - R$ ${item.preco}`);
        })

    }




    

}


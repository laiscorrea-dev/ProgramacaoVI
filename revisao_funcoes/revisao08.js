/*Crie uma compra relacionando a pessoa e utilize a função map para 
listar a pessoa e produtos e filter para filtrar osprudutos por preço 
determinado*/

import{Pessoa} from "./Pessoa.js";
import{Produto} from "./Produto.js";
import{Carrinho} from "./Carrinho.js";

let pessoa1 =new Pessoa("Tainá", 38 ,"49 9902-5942");
let pessoa2 =new Pessoa("Isa", 20 ,"49 9902-2040");

let produto1 = new Produto("Maça", 7, 20);
let produto2 = new Produto("Chocolate", 15, 25);
let produto3 = new Produto("Table", 1500, 2);

let carrinho1= new Carrinho(pessoa1);
let carrinho2= new Carrinho(pessoa2);

carrinho1.addProduto(produto3);
carrinho1.addProduto(pessoa2);

carrinho1.addProduto(produto1);
carrinho2.addProduto(produto2);

carrinho1.exibirResumo();

carrinho1.filtarProduto(50,50,0);


//Destructuring 

const [nomeCliente, produtoNome] = [carrinho1.cliente.nome, produto2.nome];

console.log(nomeCliente);
console.log(produtoNome);

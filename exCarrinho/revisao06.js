/*  Exercício 06: Produto Carrinho
Crie a classe produto com os atributos: nome, preço e estoque

Depois crie uma classe carrinho que tenha
- um atributo cliente(objeto do tipo pessoa)
- um atributo itens (array de objetos do tipo Produto)*

implemente os métodos 
- addProduto(produto = add produto ao array item 

- calcular Total() = add try catch
 - exibirResumo()

 
 No programa principal
 - crie pelo menos 2 objetos pessoa como cliente
 - crie pelo menos 3 objetos produto
 - Monte um carrrinho paracada cliente com produtos diferentes
 - Exiba o resumo da cada carrinho */

import {Pessoa} from "./Pessoa.js";
import{Carrinho} from "./Carrinho.js";
import{Produto} from "./Produto.js";

let cliente1 = new Pessoa("Lais Correa", 19 ,"49 9902-5942");
let cliente2 = new Pessoa("Yanni",18, "49 9901-3456");

let produto1 = new Produto("Chocolate", 10, 11);
let produto2 = new Produto("Salgadinho", 15, 5);
let produto3 = new Produto("Refrigerante", 5, 10);


let carrinhoPessoa1 = new Carrinho(cliente1);
let carrinhoPessoa2 = new Carrinho(cliente2);

carrinhoPessoa1.addProduto(produto3);
carrinhoPessoa1.addProduto(produto1);

carrinhoPessoa2.addProduto(produto2);
carrinhoPessoa2.addProduto(produto1);

carrinhoPessoa1.exibirResumo();
carrinhoPessoa2.exibirResumo();

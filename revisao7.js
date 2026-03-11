// gere um vetor de precos e imprima esses preços com a função map
// Esses preços receberamuma atualizaçãode 10% sobre valor imprima ovetor com o preço antigp e o 
///novo preco atualizado


let precos= [20.90, 50, 100, 15.99, 110.17];
console.log("-------- Valores somados com seus 10% ---------")
let precoNovo = precos.map((item) => (item * 0.1) +item)

    for(let i in precoNovo){
        console.log(`${precoNovo[i]}`);
    }

    


let notas = [
        {nome: "Lais" ,nota: 10},
        {nome: " Chaves", nota:8},
        {nome: " Chiquinha", nota:6},
        {nome:  "Seu Madruga", nota:2},
        {nome: "Kiko", nota:0},];

console.log(" ------ Notas na média 6 --------- ")
let ap= notas.filter(function(item){
    return item.nota >=6; });
    ap.map(function(item){
        console.log(`Nome: ${item.nome} - Nota: ${item.nota}`);
    })
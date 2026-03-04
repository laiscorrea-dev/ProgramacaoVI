import {Pessoa} from "./pessoa.js";

let p1 = new Pessoa("Lais",19,"99025942");
try{
    p1.verificarIdade();
} catch(error){
    console(error);
}
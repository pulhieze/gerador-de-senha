// Constantes que serão usadas para gerar a senha
const MAIUSCULAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const MINUSCULAS = "abcdefghijklmnopqrstuvwxyz";
const NUMEROS = "0123456789";
const ESPECIAIS = "?/)([]{}|,.:;!@#$%¨&*"; 

function coletarDados(){
    const dadosColetados = {
        quantidadeDeCaracteres: parseInt(document.getElementById("size").value), // Puxa a quantidade de caracteres
        incluirLetrasMaiusculas: document.getElementById("include-uppercase").checked, // Puxa letras maiusculas
        incluirLetrasMinusculas: document.getElementById("include-lowercase").checked, // Puxa letras minusculas
        incluirNumeros: document.getElementById("include-number").checked, // Puxa numeros
        incluirCaracteresEspeciais: document.getElementById("include-special-character").checked // Puxa caracteres especiais
    }

    return dadosColetados;
}

function validarDados(){
    let caracteresDisponiveis = []; // Lista que concatena os caracteres

    let dadosColetados = coletarDados();

    if(dadosColetados["quantidadeDeCaracteres"] <= 0 || isNaN(dadosColetados["quantidadeDeCaracteres"])){ // Verifica se o usuario tentar colocar um numero menor ou igual a zero, ele alerta
        alert("ERRO!!!");
        return;
    }

    if (dadosColetados["incluirLetrasMaiusculas"]){ // Inclui letras maiusculas
        caracteresDisponiveis.push(MAIUSCULAS);
    }
    

    if(dadosColetados["incluirLetrasMinusculas"]){ // Inclui letras minusculas 
        caracteresDisponiveis.push(MINUSCULAS)
    }

    if (dadosColetados["incluirNumeros"]){ // Inclui numeros
        caracteresDisponiveis.push(NUMEROS);
    }

    if(dadosColetados["incluirCaracteresEspeciais"]){ // Inclui caracteres especiais
        caracteresDisponiveis.push(ESPECIAIS);
    }

    const todosOsCaracteres = caracteresDisponiveis.join(""); // Concatena todos os elementos do array caracteresDisponiveis e converete em uma string

    if(caracteresDisponiveis.length === 0){
        alert("Marque uma caixa");
        return "";
    }
    
    return todosOsCaracteres;
}

function gerarSenha(){
    let dadosColetados = coletarDados();
    let dadosIncluidos = validarDados();
    
    if(!dadosIncluidos) return;

    let senha = "";
    for(let i = 0; i < dadosColetados["quantidadeDeCaracteres"]; i++){
        let indiceAleatorio = Math.floor(Math.random() * dadosIncluidos.length);
        senha += dadosIncluidos[indiceAleatorio];
    }

    document.querySelector("#password").innerHTML = senha;
}

function deletarSenha(){
    document.querySelector("#password").innerHTML = ""; 
}

window.onload = function() {
    document.querySelector("#size").value = "";
    document.querySelector("#include-uppercase").checked = false; 
    document.querySelector("#include-lowercase").checked = false; 
    document.querySelector("#include-number").checked = false; 
    document.querySelector("#include-special-character").checked = false;
    document.querySelector("#password").innerHTML = "";
}

document.querySelector("#generate").addEventListener("click", function () {
    gerarSenha();
});

document.querySelector("#delete").addEventListener("click", function () {
    deletarSenha();
});


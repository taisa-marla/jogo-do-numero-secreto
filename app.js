let lista = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirMensagemInicial(){
exibirTextoNaTela("h1", "Jogo do número secreto" );
exibirTextoNaTela("p", "Escolha um numero entre 1 e 100");
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,"Brazilian Portuguese Female", {rate:1.2});
}
    exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector ("input").value;

    if (chute == numeroSecreto){
        exibirTextoNaTela ("h1", "Acertou");
        let palavraTentativa = tentativas > 1? "tentativas" : "tentativa";
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela ("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela ("p", "o numero secreto é menor");
        }else {
            exibirTextoNaTela("p", "O numero secreto é maior");
        }
        tentativas++;

        limparCampo();
     
    }
}

function gerarNumeroAleatorio (){
   let numeroEscolhido =  parseInt(Math.random ()* numeroLimite + 1);
   let quantidadesElemnetosLista = lista.length;

   if (quantidadesElemnetosLista == numeroLimite){
    lista = [];
   }
   if (lista.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   }else{
    lista.push(numeroEscolhido);
    return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector("input");  
    chute.value = " ";  
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}
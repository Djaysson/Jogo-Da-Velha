//declaracao de variaves//
const velha1 = "X";
const velha2 = "O";
var suaVez = velha1;
var fimJogo = false;


//chamando a função//
mostraVezJogador();
inicializaParametros();


// funcao para atualiza e mostra de quem e a ves para jogar//
function mostraVezJogador(){
   if(fimJogo){
      return;
    }

    if(suaVez == velha1){
        var vez = document.querySelectorAll("div#mostra img")[0];
        vez.setAttribute("src","imagem/x.jpg");
    }else{
        var vez = document.querySelectorAll("div#mostra img")[0];
        vez.setAttribute("src","imagem/o.jpg");

    }

}
// pega os elementos x,o e colocalos nos espacos//
function inicializaParametros(){
    var local = document.getElementsByClassName("local");
    //iniciano o vetor//
    for(let i = 0; i < local.length;i++){
        //obsvando os eventos click//
        local[i].addEventListener("click",
            function(){
                //condicao fim de joogo ele da um simples retorno// 
                if(fimJogo){
                    return;
                }
                //codicao para pega o elemento img da classe local e ver se o elemento igual a 0// 
                if(this.getElementsByClassName("img").length == 0){

                //codicao para a velha1 inicia jogo//
                    if(suaVez == velha1){

                        this.innerHTML = "<img src='imagem/x.jpg'>";
                        this.setAttribute("jogada",velha1);
                //muda a vez do jogador//        
                        suaVez = velha2;
                    }else{
                        this.innerHTML = "<img src='imagem/o.jpg'>";
                        this.setAttribute("jogada",velha2);
                        suaVez = velha1;
                    }
                        mostraVezJogador();
                        verificarVencedor();             
                }
            }
            
        );
    }
}

//funcao assíncrona de verifica quem foi vencedor//
async function verificarVencedor(){

  //selecionando todos os elementos do tabuleiro  //
  var a1 = document.getElementById("a1").getAttribute("jogada");
  var a2 = document.getElementById("a2").getAttribute("jogada");
  var a3 = document.getElementById("a3").getAttribute("jogada");

  var b1 = document.getElementById("b1").getAttribute("jogada");
  var b2 = document.getElementById("b2").getAttribute("jogada");
  var b3 = document.getElementById("b3").getAttribute("jogada");

  var c1 = document.getElementById("c1").getAttribute("jogada");
  var c2 = document.getElementById("c2").getAttribute("jogada");
  var c3 = document.getElementById("c3").getAttribute("jogada");

  var vencedor = "";

  // verifica se ha um vencedor//
  if((a1 == b1 && a1 == c1 && a1 != "")||(a1 == a2 && a1 == a3 && a1 != "")||(a1 == b2 && a1 == c3 && a1 != "")){
      vencedor = a1;
    }else if((b2 == b1 && b2 == b3 && b2 != "" )||(b2 == a2 && b2 == c2 && b2 != "")||(b2 == a3 && b2 == c1 && b2 != "" )){
        vencedor = b2;
    }else if((c3 == c2 && c3 == c1 && c3 != "" )||(c3 == a3 && c3 == b3 && c3 != "" )){
        vencedor =c3;
    }
    else if(a1 != "" && a2 != "" && a3 != "" && b1 != "" && b2 != "" && b3 != "" && c1 != "" && c2 != "" && c3 != "" ){
        fimJogo= true;
        alert("Imparte");
    }
    
   //se nao entra em nem uma das codicões abaixo o jogo parar //  
    if(vencedor != ""){
        fimJogo = true;

        await sleep(80);
      // entrou em alguma codição execurta o aleta/
        alert("Parabens o ganhador foi o: '" + vencedor + "'");
    }

}
// funcao para usar uma promise,o evento alert vai espera 8 segundos para aparece na tela  // 
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}


//essa funcao e para fazer um Refresh para inicia novamente o jogo//
function reiniciaJogo(){
    window.location.reload();
    } 














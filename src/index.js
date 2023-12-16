let min = 200;
let max = 600;
let XPRecebida = 0
let XPTotal = 0
let nomeDoHeroi = "Duffie"
let rankDoHeroi = ""

while (rankDoHeroi != "Radiante") {

  XPRecebida = Math.floor(Math.random() * (max - min + 1)) + min;
  XPTotal = XPTotal + XPRecebida

  let mensagemDeXP = "Você ganhou " + XPRecebida + " de XP, totalizando " + XPTotal + " de XP."

  if (XPTotal <= 1000) {
    rankDoHeroi = "Ferro"
  } else if (XPTotal >= 1001 && XPTotal <= 2000) {
    rankDoHeroi = "Bronze"
  } else if (XPTotal >= 2001 && XPTotal <= 6000) {
    rankDoHeroi = "Prata"
  } else if (XPTotal >= 6001 && XPTotal <= 7000) {
    rankDoHeroi = "Ouro"
  } else if (XPTotal >= 7001 && XPTotal <= 8000) {
    rankDoHeroi = "Platina"
  } else if (XPTotal >= 8001 && XPTotal <= 9000) {
    rankDoHeroi = "Ascendente"
  } else if (XPTotal >= 9001 && XPTotal <= 10000) {
    rankDoHeroi = "Imortal"
  } else if (XPTotal >= 10001){
    rankDoHeroi = "Radiante"
  } else {
    rankDoHeroi = "Sem Rank"
  }
  
  let mensagemDeRank = "O Herói de nome " + nomeDoHeroi + " está no nível de " + rankDoHeroi + "! "

  console.log(mensagemDeXP + " " + mensagemDeRank)

  if (rankDoHeroi === "Radiante") {
    console.log(mensagemDeRank + "Parabéns! Você atingiu o nível máximo! Fim de jogo.")
    break
  }
}

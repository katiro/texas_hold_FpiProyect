// mecanismo de control de turnos
function llamar(){
  window.location='PokerHold.html';
}
//var iJugadores = 10;
//creador de la matriz
var oJugadores = new Array(10);
for (var i = 0; i < 10; i++) {
  oJugadores[i] = new Array(5);
  for (var i2 = 0; i2 < 5; i2++) {
    oJugadores[i][i2]="";
  }};

//obtener jugadores
function obtener() {
  var iJuga = document.getElementById("jug").value;
  //CrearArreglo(iJuga);
  turnos(iJuga);
  posiciones(iJuga);
}
//distribuir las posiciones
function posiciones(iJugadores) {
  if (iJugadores==2) {
    oJugadores[0][2]="div6";
    oJugadores[1][2]="div7";
  }
  console.log(oJugadores[0][2]);
  var e = "jugador";
  for (var i = 0; i < iJugadores; i++) {
   document.getElementById(oJugadores[i][2]).innerHTML = e;
  }

}

function turnos(iJugadores) {
  var turnos = 0;
//  while(turnos < 10){
  //  switch (turnos) {
      //case 1:
        preFloop(iJugadores);
      //  break;
    //  default:

  //  }
  //}
}

//turno de pre-floop
function preFloop(iJugadores) {
  for (var i = 0; i < iJugadores; i++) {
    for (var i2 = 3; i2 < 5; i2++) {
      oJugadores[i][i2]= repartidor();
    }
  }
  //console.log(oJugadores[0][3]);
  //console.log(oJugadores[1][3]);
}
function apuestas(iJugadores) {

}
//Repartidor
function  repartidor(){
  //familias
  var sFamilias = "";
  sFamilias = Math.floor(Math.random() * (4-1)) + 1;
  //console.log(sFamilias);
  sFamilias = String(sFamilias);
  //cartas
  var sCartas = "";
  sCartas = Math.floor(Math.random() * (13-1)) + 1;
  sCartas = String(sCartas);
  //console.log(sCartas);
  var sResultado = sFamilias + sCartas;
  //console.log(sResultado);

  return sResultado;
}

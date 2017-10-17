// mecanismo de control de turnos
//<<<<<<< HEAD
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
//function CrearArreglo(iJugadores) {
//}
//return oJugadores;
//}
//obtener jugadores

function obtener() {
  var iJuga = document.getElementById("jug").value;
  //CrearArreglo(iJuga);
  turnos(iJuga);
}





function turnos(iJugadores) {
  var turnos = 0;

preFloop(iJugadores);
//  while(turnos < 10){
//    switch (turnos) {
//      case 1:

//        break;
//      default:

//    }
//  }
}

function turnos(iJugadores) {
  var turnos = 0;
  //while(turnos < 10){
    //switch (turnos) {
      //case 1:
        preFloop(iJugadores);
        //break;
      //default:

    //}
  //}
}

//turno de pre-floop
function preFloop(iJugadores) {
  for (var i = 0; i < iJugadores; i++) {
//>>>>>>> 17922860054212477c50bbeb772a011ee8ce5760
    for (var i2 = 2; i2 < 4; i2++) {
        oJugadores[i][i2]= repartidor();
    }
  }
//<<<<<<< HEAD
  console.log(oJugadores[0][2]);
  console.log(oJugadores[1][2]);
//=======
  //console.log(oJugadores[0][2]);
  //console.log(oJugadores[1][2]);
//>>>>>>> 17922860054212477c50bbeb772a011ee8ce5760
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

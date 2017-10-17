// mecanismo de control de turnos
//var iJugadores = 10;
//var oJugadores = new Array();

function turnos(iJugadores) {
  var turnos = 0;
  while(turnos < 10){
    switch (turnos) {
      case 1:
        preFloop(iJugadores);
        break;
      default:

    }
  }
}
//turno de pre-floop
function preFloop(iJugadores) {
  var oJugadores = new Array(iJugadores);
  for (var i = 0; i < iJugadores; i++) {
    oJugadores[i] = new Array(4);
    for (var i2 = 2; i2 < 4; i2++) {
        oJugadores[i][i2]= repartidor();
    }
  }
  //console.log(oJugadores[0][2]);
  //console.log(oJugadores[1][2]);
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

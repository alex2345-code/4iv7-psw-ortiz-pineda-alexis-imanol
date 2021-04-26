


var piezas = document.getElementsByClassName('movil');

//tenemos que definir el tama;o de las piezas 

var tamWidth = [134, 192, 134, 163, 134, 163, 134, 192, 134];
var tamHeight = [163, 134, 163, 134, 192, 134,163, 134, 163];

for(var i = 0; i < piezas.length; i++){

    piezas[].setAttribute("width", tamWidth[i]);
    piezas[].setAttribute("height", tamHeight[i]);

}
























vardy = evt.clientY - 

currentPosX = currentPosX +dx;
currentPosY = currentPosY + dy;





currentX = evt.clientX;
currentY= evt.clientY;

elementoSeleccionado.setAttribute()





finction deseleccionarElemento(evt){

    testing();
    if(elementoSeleccionado != 0){
        elementoSeleccionado.removeAttribute("");
        elementoSeleccionado.removeAttribute("");
        elementoSeleccionado.removeAttribute("");
        elementoSeleccionado = 0;
    }
}

var entorno = document.getElementsByClassName('entorno');

function reordenar(evt){
    var padre = evt.target.parentNode;
    var clone = padre.cloeNode(true);
    var id = padre.getAttribute("id");

    entorno.removeChild(document,getElementsById(id));
    entorno.appendChild(clone);

    return entorno.lastChild.firstChild;
}

//necesito saber cual es la pos correcta 

var origX =[200, 304, 466, 200, 333, 437, 200, 304, 466];
var origY =[100, 100, 100, 233, 204, 233, 237, 366, 337];

function iman(){
    for(var i = 0 < piezas.length; i++){if(Math.abs(currentPosX - origX[i])<15){
         && Math.abs(currentPosY - origY[i]);
    }
}
}




function testing(){
    //si la pieza esta en su lugar 
    var bien_ubicada 
}
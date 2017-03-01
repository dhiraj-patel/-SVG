var svgCon = document.getElementById("savage");
var stop = document.getElementById("clear");
var lx = -1;
var ly = -1;

var clearDaSVG = function(){
    while(svgCon.hasChildNodes()){
	svgCon.removeChild(svgCon.lastChild);
    }
    // set to the previous line so that line doesn't show up on first dot after clearing.
    lx = -1;
    ly = -1;
}


var drawDot = function(e){
    var newC = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var xcor = event.clientX;
    var ycor = event.clientY;


    newC.setAttribute("cx",e.offsetX);
    newC.setAttribute("cy",e.offsetY);
    newC.setAttribute("r",20);
    newC.setAttribute("fill","turquoise");
    newC.setAttribute("stroke", "red");
    svgCon.appendChild(newC);
    
    if(lx !=-1 && ly!= -1){
	var newL = document.createElementNS("http://www.w3.org/2000/svg", "line");
	newL.setAttribute("x1", lx);
	newL.setAttribute("y1", ly);
	newL.setAttribute("x2", e.offsetX);
	newL.setAttribute("y2", e.offsetY);
	newL.setAttribute("stroke", "black");
	svgCon.appendChild(newL);
    }
    lx = e.offsetX;
    ly = e.offsetY;
};


svgCon.addEventListener("click",drawDot);
stop.addEventListener("click",clearDaSVG)






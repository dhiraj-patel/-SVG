var stop = document.getElementById("svgClear");
var ctx = c.getContext("2d");

function clearDaSVG(){
    var svg =document.getElementById("svg");
    var context=canvas.getContext("2d");

    d3.select("svg").remove();

    context.beginPath();
}

    // init params for dot draw
    var radius = 25;
    var xcor = 10;

 var liner = function(e){
     ctx.lineTo(e.offsetX,e.offsetY);
     ctx.stroke();
     ctx.beginPath();
     ctx.arc(xcor,100, radius, 0, 2 * Math.PI);
     ctx.stroke();
     ctx.fillStyle = "#41f4ca";
     ctx.fill();
     ctx.beginPath();
     ctx.moveTo(e.offsetX,e.offsetY);
    };

c.addEventListener("click", drawCircles);
stop.addEventListener("click",clearDaSVG);   

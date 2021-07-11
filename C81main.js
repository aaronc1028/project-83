var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var lastX, lastY, currentX, currentY;
var mouseEvent = "empty";
var color = "black";
var width = 1;

canvas.addEventListener("mousedown", mouseDownFN);
canvas.addEventListener("mouseup", mouseUpFN);
canvas.addEventListener("mouseleave", mouseLeaveFN);
canvas.addEventListener("mousemove", mouseMoveFN);

function mouseDownFN(e) {
    mouseEvent = "down"
     color=document.getElementById("textInput").value
     width=document.getElementById("width").value
     linewidth=document.getElementById("linewidth").value
}
function mouseUpFN(e) {
    mouseEvent = "up"
}
function mouseLeaveFN(e) {
    mouseEvent = "leave"
}
function mouseMoveFN(e) {
    currentX = e.clientX - canvas.offsetLeft
    currentY = e.clientY - canvas.offsetTop
    if (mouseEvent == "down") {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width
        ctx.moveTo(lastX, lastY)
        ctx.lineTo(currentX, currentY)
        ctx.stroke()
    }
    lastX=currentX
    lastY=currentY
}
function clearcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height)


var canvas=document.getElementById("myCanvas")
var ctx=canvas.getContext("2d")
var lastX, lastY, currentX, currentY
var color="orange"
var width=1
var screenWidth=screen.width
var newWidth=screenWidth-70
var newHeight=screenWidth-300
if(screenWidth<992){
    document.getElementById("myCanvas").width=newWidth
    document.getElementById("myCanvas").height=newHeight
    document.body.style.overflow="hidden"
}
canvas.addEventListener("touchstart", touchStartFN)
canvas.addEventListener("touchmove", touchMoveFN)
function touchStartFN(e){
color=document.getElementById("textInput").value
width=document.getElementById("width").value
lastX=e.touches[0].clientX-canvas.offsetLeft
lastY=e.touches[0].clientY-canvas.offsetTop

}
function touchMoveFN(e){
    currentX=e.touches[0].clientX-canvas.offsetLeft
    currentY=e.touches[0].clientY-canvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=width
    ctx.moveTo(lastX,lastY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()
    lastX=currentX
    lastY=currentY
}
lastX=currentX
function clearcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

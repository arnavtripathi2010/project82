var mouseEvent=emepty

canvas = document.getElementById('myCanvas')
ctx= canvas.getContext('2d')
canvas.addEventListener("mousedown", my_mousedown);

color="black"
width_of_line= 2;

function my_mousedown(e)
{
    color = documet.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown"
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mcouseleave(e)
{
    mouseEvent = "mouseleave"
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouseEvent="mouseup"

}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetleft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x+ "y =" + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius,0 ,2 * Math.PI);
        ctx.stroke();
    }
        

}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}


function setup()
{
    canvas = createCanvas(300, 300)
    canvas.center()
}

function draw()
{
    stroke("black")
    strokeWeight(13)
    if(mouseIsPressed)
    {
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}

function clearCanvas()
{
    background("white")
}
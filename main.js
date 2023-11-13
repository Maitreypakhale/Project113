function preload()
{
    
}

function setup()
{
    canvas = createCanvas(550,450)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}

function save()
{
    save('Maitrey.png')
}

function draw()
{
    image(video,0,0,550,450)
    fill('red')
    stroke('red')
    circle(25,25,50)
    circle(525,25,50)
    circle(25,425,50)
    circle(525,425,50)
    fill('green')
    stroke('green')
    rect(50,17,450,20)
    rect(50,417,450,20)
    rect(17,50,20,350)
    rect(517,50,20,350)
}
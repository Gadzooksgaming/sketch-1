var time=0
var score1=0
var timerId;
function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifycanvas);
    synth=window.speechSynthesis;
}

function preload(){
    classifier=ml5.imageClassifier('Doodlenet')
}

function draw(){
    stroke.weight(13);
    stroke(0);
    if (mouseIsPressed){
        line(pmouseX,pmouseY,mousex,mousey);
    }
}

function classifycanvas(){
    classifier.classify(canvas, gotResult);
}
function gotResult(error,results){
        if(error){
            console.error(error);
        }
        console.log(results);
        document.getElementById('lable').innerHTML='label'+results[0].label;
        document.getElementById('Socre').innerHTML='score'+Math.round(results[0].confidence*100);
        utterThis=new
        SpeechSynthesisUtterance(results[0].label);
        Synth.speak(utterThis);
    }


function clearCanvas()
{
    background("white")
}

function timer() {
    time++;  
    if (time < Infinity) {
        timerId = setTimeout(timer, 1000);
        time++;  
        document.getElementById("timer").innerHTML="time:",time,"seconds";
    
  }
  
}

timer();

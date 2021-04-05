//https://teachablemachine.withgoogle.com/models/dgf5Yn8vc/

function setup() {
    canvas=createCanvas(250,250);
    canvas.center();
    video=createCapture(VIDEO)
    video.hide()
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/dgf5Yn8vc/model.json',modelLoaded);
     

}
function draw() {
image(video,0,0,250,250);
classifier.classify(video,gotResult)

}


function gotResult(error,result) {
 if (error) {
     console.log(error)
}  
     else{
         console.log(result)
         document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(2);
         document.getElementById("result_object_name").innerHTML=result[0].label;

     }
}


function modelLoaded() {
console.log(modelLoaded); 
}
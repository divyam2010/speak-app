var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    speak();
}
function speak()
{
  var synth = window.speechSynthesis;
  speakdata = document.getElementById("textbox").value;
  var utterthis = new SpeechSynthesisUtterance(speakdata);
  synth.speak(utterthis);
  Webcam.attach(camera);
}
Webcam.set({
  width: 360, 
  height: 250,
  imageformate:'png',
  pngquality:90

});
camera = document.getElementById("camera");


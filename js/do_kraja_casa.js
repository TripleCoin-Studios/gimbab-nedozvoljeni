var currentTime=new Date();
var m=((currentTime.getHours()*60)+currentTime.getMinutes())-1;
var currentLesson;
//Lesson lenght
var ll=45;
//Time passed
var tp=480;

function calculateLesson(){
  m++;
  var currentDay=currentTime.getDay();
  if(currentDay!=6&&currentDay!=0){
    if(m<tp){
	  currentLesson="nema nastave!";
    }
    if(m>=tp&&m<(tp+=ll)){
	  currentLesson="1.cas!";
    }
    if(m>tp&&m<(tp+=5)){
	  currentLesson="mali odmor!";
    }
    if(m>tp&&m<(tp+=ll)){
	  currentLesson="2.cas!";
    }
    if(m>tp&&m<(tp+=25)){
	  currentLesson="veliki odmor!";
    }
    if(m>tp&&m<(tp+=ll)){
	  currentLesson="3.cas!";
    }
    if(m>tp&&m<(tp+=5)){
	  currentLesson="mali odmor!";
    }
    if(m>tp&&m<(tp+=ll)){
	  currentLesson="4.cas!";
    }
    if(m>tp&&m<(tp+=10)){
	  currentLesson="mali odmor!";
    }
    if(m>tp&&m<(tp+=ll)){
	  currentLesson="5.cas!";
    }
    if(m>tp&&m<(tp+=5)){
	  currentLesson="mali odmor!";
    }
    if(m>tp&&m<(tp+=ll)){
	  currentLesson="6.cas!";
    }
    if(m>tp&&m<(tp+=5)){
	  currentLesson="mali odmor!";
    }
    if(m>tp&&m<(tp+=ll)){
	  currentLesson="7.cas!";
    }
    if(m>tp&&m<(tp+=5)){
	  currentLesson="mali odmor!";
    }
    if(m>tp&&m<(tp+=ll)){
	  currentLesson="8.cas!";
    }
    if(m>tp){
	  currentLesson="nema nastave!";
    }
	if(currentLesson=="nema nastave!"){
	  document.getElementById("krajCasa").innerHTML=
	  "Sada "+currentLesson;
    }else{
	  document.getElementById("krajCasa").innerHTML=
	  "Sada je "+currentLesson;
    }
  }else{
	document.getElementById("krajCasa").innerHTML="Danas nema nastave!";
  }
  tp=480;
}

window.onload=function(){
  calculateLesson();
  setInterval(calculateLesson,60000);
}
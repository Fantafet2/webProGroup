var img1 = [document.getElementById("img1"), 1];
var img2 = [document.getElementById("img2"), 2];

var multiplication = document.getElementById("multisymb");
var equalsymbol = document.getElementById("equsymb");
var answer = document.getElementById("answer");


var userAnswer = document.getElementById("answerbox");
var submitAnswer = document.getElementById("CheckAnswer");
var Next = document.getElementById("NextButton");
var StartGameButton = document.getElementById("StartGame");


let int1Images = [img1, img2];

let int1;
let int2;

function positioning(imagepos,proxy){

    multiplication.style.left = "20%"
    multiplication.style.position = "relative";

    equalsymbol.style.left = "45%"
    equalsymbol.style.position = "relative";
    equalsymbol.style.top = "10%";

    answer.style.left = "50%"
    answer.style.position = "relative";
    answer.style.top = "10%";


    if(proxy === 1){
        imagepos.style.left = "5%";
        imagepos.style.position = "ansolute";
        imagepos.style.top = "10%";

    }

    if(proxy === 2){
        imagepos.style.left = "40%";
        imagepos.style.position = "absolute";
        imagepos.style.top = "10%";

    }

}

function submitAnswerFunction(){
    let correctAns = int1*int2;
    let userAns = userAnswer.value;

    let newuserAns = userAns-0;

    answer.src = "../Assets/imgs/numbers/Image"+2+".jpg";
    answer.style.transform = "rotateY(10deg)";

    if(newuserAns === correctAns){
        alert("the user entered the correct answer");
    }
    else{
       alert("That was the wrong number"+"\n"+"the correct answer is "+ correctAns +"\n"+"the user answer is " + newuserAns);
    }
}

function getRandomInt(range) {
    let min = 1;
    let max = range;

    return Math.floor(Math.random() * (max - min) + min);
  }

function playgame(){
    answer.style.transform = "rotateY(90deg)";

    int1 = getRandomInt(5);
    int2 = getRandomInt(10);

    console.log("int 1 is: ",int1);
    console.log("int 2 is: ",int2);

    let x;
        
    let tempImg1 = int1Images[0].at(0);
    let tempVal1 = int1

    tempImg1.src = "../Assets/imgs/numbers/Image"+tempVal1+".jpg";
    console.log("the turnt num should be: ",tempImg1);
    tempImg1.style.transform = "rotateY(10deg)";
    positioning(tempImg1, 1);

        
    let tempImg2 = int1Images[1].at(0);
    let tempVal2 = int2

    tempImg2.src = "../Assets/imgs/numbers/Image"+tempVal2+".jpg";
    console.log("the turnt num should be: ",tempImg2);
    tempImg2.style.transform = "rotateY(10deg)";

    positioning(tempImg2, 2);
}

function StartGame(){
    var playArea = document.getElementById("area");
    playArea.style.display = " block";
    playgame()
}

submitAnswer.addEventListener("click",submitAnswerFunction)
Next.addEventListener("click",playgame)
StartGameButton.addEventListener("click",StartGame)

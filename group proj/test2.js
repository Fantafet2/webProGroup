

var img1 = [document.getElementById("img1"), 1];
var img2 = [document.getElementById("img2"), 2];
var img3 = [document.getElementById("img3"), 3];
var img4 = [document.getElementById("img4"), 4];
var img5 = [document.getElementById("img5"), 5];
var img6 = [document.getElementById("img6"), 6];
var img7 = [document.getElementById("img7"), 7];
var img8 = [document.getElementById("img8"), 8];
var img9 = [document.getElementById("img9"), 9];

var img2_1 = [document.getElementById("2img1"), 1];
var img2_2 = [document.getElementById("2img2"), 2];
var img2_3 = [document.getElementById("2img3"), 3];
var img2_4 = [document.getElementById("2img4"), 4];
var img2_5 = [document.getElementById("2img5"), 5];
var img2_6 = [document.getElementById("2img6"), 6];
var img2_7 = [document.getElementById("2img7"), 7];
var img2_8 = [document.getElementById("2img8"), 8];
var img2_9 = [document.getElementById("2img9"), 9];

var multiplication = document.getElementById("multisymb");
var equalsymbol = document.getElementById("equsymb");

var userAnswer = document.getElementById("answerbox");
var submitAnswer = document.getElementById("submitAnswer");

let int1Images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
let int2Images = [img2_1, img2_2, img2_3, img2_4, img2_5, img2_6, img2_7, img2_8, img2_9];

let int1 = getRandomInt(5);
let int2 = getRandomInt(10);

function positioning(imagepos,proxy){

    multiplication.style.left = "25%"
    multiplication.style.position = "relative";

    equalsymbol.style.left = "45%"
    equalsymbol.style.position = "relative";

    if(proxy === 1){
        imagepos.style.left = "10%";
        imagepos.style.position = "ansolute";
        imagepos.style.top = "0%";

    }

    if(proxy === 2){
        imagepos.style.left = "45%";
        imagepos.style.position = "absolute";
        imagepos.style.top = "0%";

    }

}

function submitAnswerFunction(){
    let correctAns = int1*int2;
    let userAns = userAnswer.value;

    let newuserAns = userAns-0;

    if(newuserAns === correctAns){
        console.log("the user entered the correct answer");
    }
    else{
        console.log("that was the wrong number");
        console.log("the correct answer is ",correctAns);
        console.log("the user answer is",newuserAns);
        }
}

function getRandomInt() {
    let min = 1;
    let max = 10;

    return Math.floor(Math.random() * (max - min) + min);
  }

function playgame(){

    
    console.log("int 1 is: ",int1);
    console.log("int 2 is: ",int2);

    let x;
    for(x = 0; x < int1Images.length; x++){
        let tempImg = int1Images[x].at(0);
        
        tempImg.style.transform = "rotateY(90deg)";
    }

    for(x = 0; x < int2Images.length; x++){
        let tempImg = int2Images[x].at(0);
        
        tempImg.style.transform = "rotateY(90deg)";
    }

    for(x = 1; x<int1Images.length; x++){

        let proxy = 1;
        
        let tempImg = int1Images[x-1].at(0);
        let tempVal = int1Images[x-1].at(1);

        if(int1 === x){
            console.log("the turnt num should be: ",tempImg);
            tempImg.style.transform = "rotateY(10deg)";
        }
        positioning(tempImg, proxy);
    }

    for(x = 1; x<int2Images.length; x++){

        let proxy = 2;
        
        let tempImg = int2Images[x-1].at(0);
        let tempVal = int2Images[x-1].at(1);
        
        if(int2 === x){
            console.log("the turnt num should be: ",tempImg);
            tempImg.style.transform = "rotateY(10deg)";
        }

        positioning(tempImg, proxy);
    }

    

}



submitAnswer.addEventListener("click",submitAnswerFunction)


playgame();
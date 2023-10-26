const PlayerRegistrationData = {};
var NumberOfUser = 1;
var check = "false";
var LoggedInUser;
var Gen;

/*Variables that stores the two random generate number*/
let int1;
let int2;


var multiplication = document.getElementById("multisymb");
var equalsymbol = document.getElementById("equsymb");
var answer = document.getElementById("answer");

var userAnswer = document.getElementById("answerbox");
var submitAnswer = document.getElementById("CheckAnswer");
var Next = document.getElementById("NextButton");
var StartGameButton = document.getElementById("StartGame");
var EndGameButton = document.getElementById("EndGame");

var img1 = [document.getElementById("img1"), 1];
var img2 = [document.getElementById("img2"), 2];


/*Arrys*/
let int1Images = [img1, img2];

PlayerRegistrationData["Malick"] = ["Malick", "Brown", "06-08-2014", "Male", "MalBwn1@gmail.com", 8, 1,];

// document.getElementsById("registerBtn").addEventListener('click', Register());
// document.getElementsById("registerBtn").addEventListener('click', Store());


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

/* Functions that handle the Login and register page*/
function signIn() {
    document.getElementById('wrapper1').style.transform = "scale(1)";
}

function iconClose() {
    document.getElementById('wrapper1').style.transform = "scale(0)";
    document.getElementById('wrapper2').style.transform = "scale(0)";
    document.getElementById('wrapper2').style.display = "";
    document.getElementById('wrapper1').style.display = "";
}

function registerPage() {
    document.getElementById('wrapper1').style.transform = "scale(0)";
    document.getElementById('wrapper2').style.transform = "scale(1)";
    setTimeout(() => {
        document.getElementById('wrapper1').style.display = "none";
        document.getElementById('wrapper2').style.display = "inline-block";  
    }, 280);  
      
}

function loginPage() {
    document.getElementById('wrapper1').style.transform = "scale(1)";
    document.getElementById('wrapper2').style.transform = "scale(0)";
    setTimeout(() => {
        document.getElementById('wrapper1').style.display = "";
        document.getElementById('wrapper2').style.display = "none";  
    }, 280);
}

function typeChanger(){
    document.getElementById("DOB").type = "date";
    document.getElementById("DOB2").type = "date";
}

function calculateAge(id , Age, label){
    var DOB = document.getElementById(id).value;
    var tag = document.getElementById(label);
    const d = new Date(DOB);
    let year = d.getFullYear();
    var now = new Date().getFullYear(); 
    var age = Math.abs(now - year);
    var message = (age + " years old is Acceptable");

    if (age < 9 || age > 12) {
        window.alert(age + ' years old does not meet the player requirement');  
    } else if (age > 8 && age < 13) {
        document.getElementById(Age).removeAttribute('disabled');
        document.getElementById(Age).setAttribute("value", age);
        document.getElementById(label).style.top = "5px";
        document.getElementById(Age).setAttribute('disabled',true);
        // Using Set attribute method.
    }
    else if (age < 1) {
        window.alert('This age does not meet the player requirement');  
    }
}

function CheckForUser(firstnameId,lastNameId, DOBId){
    /*Note: In the console, Only the Gen value is read. 
    Please check the values of the other variables to store. */  
    
    /*We the Element from the index Webpage*/
    var fname = document.getElementById(firstnameId).value;
    var lname = document.getElementById(lastNameId).value;
    var DOB = document.getElementById(DOBId).value;

    // PlayerRegistrationData[i] = [{fname, lname,  DOB , Gen}];
    console.log(PlayerRegistrationData);
    
   for (let key in PlayerRegistrationData) {
        console.log(PlayerRegistrationData[key]);
        if (fname === PlayerRegistrationData[key].at(0)) {
            //check = "true";
            console.log("Found User");
            return true;
        }
    }   

    // for (let counter = 0; counter < NumberOfUser ; counter++) {
    //     console.log(PlayerRegistrationData[counter]);
    //     if (fname === PlayerRegistrationData[counter].at(1)) {
    //         //check = "true";
    //         console.log("Found User");
    //         return true;
    //     }
    // }    
    return false;
};

function Register(event) {
    if (event){event.preventDefault();}

    if (document.getElementById("Male2").checked) {
        Gen = "Male";
    }

    else if (document.getElementById("Female2").checked){
        Gen = "Female";
    }
    else{
        Gen = "Non Binary";
    }

    var check = CheckForUser("firstName2", "lastName2", "DOB2");

    console.log(check)
    if (check === true){
        window.alert("A match found!\nPlease nagivate to the login page."); 
        loginPage()
    }else if(check === false){
        iconClose()
        StoreUserRegistration()
    }       
}

function UserLogin(event){
    if (event){event.preventDefault();}

    var check = CheckForUser("firstName", "lastName", "DOB");

    console.log(check)
    if (check === true){
        window.alert("A match found!\nPlease Continue to Start game."); 
        LoggedInUser = document.getElementById(firstnameId).value;
        iconClose()
    }else if(check === false){
        window.alert("No such user match found!\nPlease Try registering."); 
        registerPage()
    }
}

/*We store the users data using this funcation*/
function StoreUserRegistration(){
    /*Note: In the console, Only the Gen value is read. 
    Please check the values of the other variables to store. */  
    
    /*We the Element from the index Webpage*/
    var fname = document.getElementById("firstName2").value;
    var lname = document.getElementById("lastName2").value;
    var DOB = document.getElementById("DOB2").value;

    // PlayerRegistrationData[i] = [{fname, lname,  DOB , Gen}];
    console.log(NumberOfUser);
    PlayerRegistrationData[fname] = [fname, lname,  DOB , Gen, fname+lname+"@gmail.com", 0 ,0];
    LoggedInUser = fname;
    NumberOfUser++;   

    console.log(PlayerRegistrationData);
    
};

/*These function handle the the playing of the game */

/*This funcation fires whne the User clicks the submit button and vaildtes the answer*/
function checkAnswer(){
    let correctAns = int1*int2;
    let userAns = userAnswer.value;

    let newuserAns = userAns-0;

    answer.src = "../Assets/imgs/numbers/Image"+2+".jpg";
    answer.style.transform = "rotateY(10deg)";

    if(newuserAns === correctAns){
        window.alert("the user entered the correct answer");
        PlayerRegistrationData[LoggedInUser][5] += 1;
    }
    else{
       window.alert("That was the wrong number"+"\n"+"the correct answer is "+ correctAns +"\n"+"the user answer is " + newuserAns);
       PlayerRegistrationData[LoggedInUser][6] += 1;
    }
    showAllStats()
}

/*This function Generates the random numbers*/
function getRandomInt(range) {
    let min = 1;
    let max = range;

    return Math.floor(Math.random() * (max - min) + min);
}


/*The play game function fire the Generates number function and displays them on the field*/
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
    // console.log("the turnt num should be: ",tempImg1);
    tempImg1.style.transform = "rotateY(10deg)";
    positioning(tempImg1, 1);

        
    let tempImg2 = int1Images[1].at(0);
    let tempVal2 = int2

    tempImg2.src = "../Assets/imgs/numbers/Image"+tempVal2+".jpg";
    // console.log("the turnt num should be: ",tempImg2);
    tempImg2.style.transform = "rotateY(10deg)";

    positioning(tempImg2, 2);
}

function findPercentageScore(){
    if (document.getElementById("showPercentageTable")) {
        console.log("Table removed")
        document.getElementById("showPercentageTable").remove()
    }
    var MainTableRow = document.getElementById("showPercentageRow");
    // create elements <table> and a <tbody>
    var tbl = document.createElement("table");
    tbl.style.width = '100%';
    tbl.style.border = '1px solid black';
    tbl.className = "ScoreTable"
    tbl.id = "showPercentageTable"

    var rowheader = tbl.insertRow();
    //Name Cell
    var cell1 = rowheader.insertCell();
    cell1.appendChild(document.createTextNode("Name"));
    //Percentage score
    var cell2 = rowheader.insertCell();
    cell2.appendChild(document.createTextNode("Percentage score"));
    //Correct answers
    var cell3 = rowheader.insertCell();
    cell3.appendChild(document.createTextNode("Correct answers"));
    //incorrect equations
    var cell4 = rowheader.insertCell();
    cell4.appendChild(document.createTextNode("incorrect equations"));

    for (let key in PlayerRegistrationData) {
        // table row creation
        var row = tbl.insertRow();
    
        console.log(PlayerRegistrationData[key]);
            for (var i = 0; i < PlayerRegistrationData[key].length; i++) {
                // create element <td> and text node 
                //Make text node the contents of <td> element
                // put <td> at end of the table row
                /*Create a The row for the data */
                var cell = row.insertCell();
                if(i == 0 || i == 5 || i == 6){
                    cellText = document.createTextNode(PlayerRegistrationData[key].at(i));
                    cell.appendChild(cellText);
                    console.log(PlayerRegistrationData[key].at(i));
                }else if (i == 1){
                    var percentageScore = PlayerRegistrationData[key].at(5)/(PlayerRegistrationData[key].at(5) + PlayerRegistrationData[key].at(6));
                    cellText = document.createTextNode(percentageScore * 100);
                    cell.appendChild(cellText);
                }
            }        
    }

    MainTableRow.appendChild(tbl);

}

function showAllStats(){
    if (document.getElementById("showPlayerDiv")) {
        console.log("Div removed")
        document.getElementById("showPlayerDiv").remove()
    }
    var MainTableRow = document.getElementById("showallplayers");
    // create elements <table> and a <tbody>
    var Div1 = document.createElement("div");
    Div1.style.width = '100%';
    Div1.style.border = '1px solid black';
    Div1.className = "showAllPlayerDiv"
    Div1.id = "showPlayerDiv"
   

    for (let key in PlayerRegistrationData) {
        // table row creation  
        console.log(PlayerRegistrationData[key]);  
        var cell = document.createElement("div");
        cell.className = "showAllPlayerDiv"
        cell.id = PlayerRegistrationData[key].at(0)
            for (var i = 0; i < PlayerRegistrationData[key].length; i++) {
                // create element <td> and text node 
                //Make text node the contents of <td> element
                // put <td> at end of the table row
                /*Create a The row for the data */
                if(i == 0 || i == 5 || i == 6){
                    cellText = document.createTextNode(PlayerRegistrationData[key].at(i));
                    var breakeTag = document.createElement("br");
                    cell.appendChild(cellText); cell.appendChild(breakeTag);
                }else if (i == 1){
                    var percentageScore = PlayerRegistrationData[key].at(5)/(PlayerRegistrationData[key].at(5) + PlayerRegistrationData[key].at(6));
                    cellText = document.createTextNode(percentageScore * 100);
                    var breakeTag = document.createElement("br");
                    cell.appendChild(cellText); cell.appendChild(breakeTag);

                }
            }   
        Div1.appendChild(cell)     
    }

    MainTableRow.appendChild(Div1);

}

function StartGame(){
    if (!LoggedInUser) {alert("Please Loggin First"); return;}
    var playArea = document.getElementById("area");
    //var showpercentageTable = document.getElementById("showPercentageTable");

    playArea.style.display = " block";
    //showpercentageTable.style.display = "none";
    playgame()
}

function EndGame(){
    var playArea = document.getElementById("area");
    //var showpercentageTable = document.getElementById("showpercentage");

    playArea.style.display = "none";
    //showpercentageTable.style.display = " block";

    findPercentageScore()
}

submitAnswer.addEventListener("click",checkAnswer)
Next.addEventListener("click",playgame)
StartGameButton.addEventListener("click",StartGame)
EndGameButton.addEventListener("click",EndGame)



//     document.writeln(storage[i]);
//     window.alert('Log on Successful!');
//     window.location.href="#Game-address;";
// i ++;
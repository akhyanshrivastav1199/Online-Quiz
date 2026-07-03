const questions = [
{
question:"कंप्यूटर का मस्तिष्क किसे कहा जाता है?",
options:[
"RAM",
"CPU",
"Hard Disk",
"Monitor"
],
answer:1
},
{
question:"HTML का पूरा नाम क्या है?",
options:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyper Transfer Markup Language",
"Hyper Tool Markup Language"
],
answer:0
},
{
question:"CSS का उपयोग किसके लिए किया जाता है?",
options:[
"Programming",
"Styling Web Pages",
"Database",
"Operating System"
],
answer:1
},
{
question:"Java एक क्या है?",
options:[
"Operating System",
"Programming Language",
"Browser",
"Database"
],
answer:1
},
{
question:"RAM किस प्रकार की मेमोरी है?",
options:[
"Permanent",
"Temporary",
"Optical",
"External"
],
answer:1
},
{
question:"कंप्यूटर में डेटा का सबसे छोटा यूनिट क्या है?",
options:[
"Byte",
"Bit",
"KB",
"MB"
],
answer:1
},
{
question:"निम्न में से कौन-सा Input Device है?",
options:[
"Monitor",
"Printer",
"Keyboard",
"Speaker"
],
answer:2
},
{
question:"निम्न में से कौन-सा Output Device है?",
options:[
"Mouse",
"Keyboard",
"Scanner",
"Monitor"
],
answer:3
},
{
question:"Python क्या है?",
options:[
"Antivirus",
"Programming Language",
"Browser",
"Database"
],
answer:1
},
{
question:"Windows क्या है?",
options:[
"Programming Language",
"Operating System",
"Web Browser",
"Compiler"
],
answer:1
},
{
question:"URL का पूरा नाम क्या है?",
options:[
"Uniform Resource Locator",
"Universal Resource Link",
"Uniform Read Link",
"Universal Read Locator"
],
answer:0
},
{
question:"इंटरनेट पर वेबसाइट खोलने के लिए किसका उपयोग किया जाता है?",
options:[
"Compiler",
"Browser",
"Calculator",
"Paint"
],
answer:1
},
{
question:"C Language किस प्रकार की भाषा है?",
options:[
"High Level Language",
"Machine Language",
"Assembly Language",
"Binary Language"
],
answer:0
},
{
question:"कंप्यूटर वायरस क्या है?",
options:[
"Hardware",
"Software Program",
"Input Device",
"Output Device"
],
answer:1
},
{
question:"MS Word का उपयोग किसके लिए किया जाता है?",
options:[
"Video Editing",
"Document Typing",
"Coding",
"Gaming"
],
answer:1
},
{
question:"Excel का मुख्य उपयोग क्या है?",
options:[
"Spreadsheet",
"Video Editing",
"Web Browsing",
"Programming"
],
answer:0
},
{
question:"कंप्यूटर में फ़ाइल सेव करने का शॉर्टकट क्या है?",
options:[
"Ctrl + C",
"Ctrl + V",
"Ctrl + S",
"Ctrl + X"
],
answer:2
},
{
question:"Copy करने का शॉर्टकट क्या है?",
options:[
"Ctrl + C",
"Ctrl + V",
"Ctrl + Z",
"Ctrl + P"
],
answer:0
},
{
question:"WWW का पूरा नाम क्या है?",
options:[
"World Wide Web",
"World Web Window",
"Wide World Web",
"Web World Wide"
],
answer:0
},
{
question:"Database को मैनेज करने के लिए किसका उपयोग किया जाता है?",
options:[
"DBMS",
"MS Paint",
"Notepad",
"VLC"
],
answer:0
},
{
question:"C++ में प्रोग्राम की शुरुआत किस फ़ंक्शन से होती है?",
options:[
"start()",
"run()",
"main()",
"begin()"
],
answer:2
},
{
question:"Java में आउटपुट दिखाने के लिए कौन-सा स्टेटमेंट उपयोग होता है?",
options:[
"print()",
"echo()",
"System.out.println()",
"display()"
],
answer:2
},
{
question:"कंप्यूटर नेटवर्क का सबसे बड़ा उदाहरण क्या है?",
options:[
"LAN",
"MAN",
"Internet",
"PAN"
],
answer:2
},
{
question:"इनमें से कौन-सी Programming Language नहीं है?",
options:[
"Python",
"Java",
"Windows",
"C++"
],
answer:2
},
{
question:"निम्न में से कौन-सा Search Engine है?",
options:[
"Google",
"Windows",
"MS Word",
"Excel"
],
answer:0
}
];

let currentQuestion = 0;
let score = 0;

const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const question = document.getElementById("question");
const options = document.getElementById("options");
const progress = document.getElementById("progress");
const scoreText = document.getElementById("score");

startBtn.onclick = function(){

startScreen.style.display = "none";
quizScreen.style.display = "block";

showQuestion();

};

function showQuestion(){

let q = questions[currentQuestion];

progress.innerHTML =
"Question " + (currentQuestion+1) + " / " + questions.length;

scoreText.innerHTML =
"Score : " + score;

question.innerHTML = q.question;

options.innerHTML = "";
q.options.forEach(function(option,index){

let btn=document.createElement("button");

btn.className="option-btn";

btn.innerHTML=option;

btn.onclick=function(){

let allButtons=document.querySelectorAll(".option-btn");

allButtons.forEach(function(button){

button.disabled=true;

});

if(index===q.answer){

btn.classList.add("correct");

score++;

}else{

btn.classList.add("wrong");

allButtons[q.answer].classList.add("correct");

}

scoreText.innerHTML="Score : "+score;

setTimeout(function(){

currentQuestion++;

if(currentQuestion<questions.length){

showQuestion();

}else{

showResult();

}

},1000);

};

options.appendChild(btn);

});

}

function showResult(){

quizScreen.style.display="none";

resultScreen.style.display="block";

let percentage=Math.round((score/questions.length)*100);

let result="FAIL ❌";

if(percentage>=40){

result="PASS ✅";

}

document.getElementById("final-score").innerHTML=
"Your Score : "+score+" / "+questions.length;

document.getElementById("percentage").innerHTML=
"Percentage : "+percentage+"%";

document.getElementById("result").innerHTML=result;
}

document.getElementById("restart-btn").onclick = function(){

currentQuestion = 0;

score = 0;

resultScreen.style.display = "none";

startScreen.style.display = "block";

};
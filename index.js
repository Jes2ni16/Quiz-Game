

let questions=[
{
    question: 'Who is the father of Computers?',
    answers:[
        {text:'James Gosling', correct:false},
        {text:'Charles Babbage', correct:true},
        {text:'Dennis Ritchie', correct:false},
        {text:'Bjarne Stroustrup', correct:false},
]
},

{
    question: 'What is the full form of CPU?',
    answers:[
        {text:'a) Computer Processing Unit', correct:false},
        {text:'b) Computer Principle Unit', correct:false},
        {text:'c) Central Processing Unit', correct:true},
        {text:'d) Control Processing Unit', correct:false},
]
},

{
    question: ' Which of the following language does the computer understand?',
    answers:[
        {text:'a) Computer understands only C Language', correct:false},
        {text:'b) Computer understands only Assembly Language', correct:false},
        {text:'c) Computer understands only Binary Language', correct:true},
        {text:'d) Computer understands only BASIC', correct:false},
]
},

{
    question: 'Which of the following computer language is written in binary codes only?',   
    answers:[
        {text:'a) pascal', correct:false},
        {text:'b) machine language', correct:true},
        {text:'c) C', correct:false},
        {text:'d) C#', correct:false},
]
},

{
    question: 'Which of the following is the brain of the computer?',
    answers:[
        {text:'a) Central Processing Unit', correct:true},
        {text:'b) Memory', correct:false},
        {text:'c) Arithmetic and Logic unit', correct:false},
        {text:'d) Control unit', correct:false},
]
},

{
    question: 'Which of the following is not a characteristic of a computer?',
    answers:[
        {text:'a) Versatility', correct:false},
        {text:'b) Accuracy', correct:false},
        {text:'c) Diligence', correct:false},
        {text:'d) I.Q.', correct:true},
]
},

{
    question: 'Which of the following is the smallest unit of data in a computer?',
    answers:[
        {text:'a) Bit', correct:true},
        {text:'b) KB', correct:false},
        {text:'c) Nibble', correct:false},
        {text:'d) Byte', correct:false},
]
},


{
    question: 'Which of the following monitor looks like a television and are normally used with non-portable computer systems?',
    answers:[
        {text:'a) LED', correct:false},
        {text:'b) LCD', correct:false},
        {text:'c) CRT', correct:true},
        {text:'d) Flat Panel Monitors', correct:false},
]
},

{
    question: ' Which of the following is not a type of computer code?',
    answers:[
        {text:'a) EDIC', correct:true},
        {text:'b) ASCII', correct:false},
        {text:'c) BCD', correct:false},
        {text:'d) EBCDIC', correct:false},
]
},

{
    question: ' Which of the following is designed to control the operations of a computer?',
    answers:[
        {text:'a) User', correct:false},
        {text:'b) Application Software', correct:false},
        {text:'c) System Software', correct:true},
        {text:'d) Utility Software', correct:false},
]
}

]
let score=document.getElementById('points');
let quest=document.getElementById('question');
let ans=document.getElementById('answerBtn');
let next=document.getElementById('nextBtn');
let questionNum=document.getElementById('questionNumber');
let points=0;
let currentIndex=0;
let questionNums=0;

function startQuiz(){
    currentIndex=0;
    points=0;
    next.innerHTML="Next";
    showQuest();     
    
    }
    
    function showQuest(){
        resetAll();
    const currentQuestion=questions[currentIndex];
    questionNums= currentIndex + 1;
    questionNum.innerHTML= questionNums;
    quest.innerHTML=currentQuestion.question;
    score.innerHTML=points;


    currentQuestion.answers.forEach(answer => {
        const button=document.createElement('button');
        button.innerHTML=answer.text;
        button.classList.add('ans');
        ans.appendChild(button);
        if(answer.correct){
button.dataset.correct=answer.correct;
        }
        button.addEventListener('click', choiceAns);

    })
    }

function resetAll(){
next.style.display="none";
while(ans.firstChild){
    ans.removeChild(ans.firstChild);
}
}

function choiceAns(e){
const selectBtn=e.target;
const isCorrect= selectBtn.dataset.correct ==="true";
if(isCorrect){
alert('correct');
points++;
console.log(points);
}
else{
   alert('Wrong');
}
Array.from(ans.children).forEach(button =>{
if(button.dataset.correct==='true'){
    button.classList.add('correct');
}
button.disabled= true;

});
next.style.display="block";
}

next.addEventListener('click', nextQuest);

function showScore(){
resetAll();
quest.innerHTML=`You scored ${points} over ${questions.length}`;
next.innerHTML="Play Again";
next.style.display="block";

}

function handleNextBtn(){
    currentIndex++;
    if(currentIndex< questions.length){
    showQuest();}
    else{
      showScore();
    }
}

function nextQuest(){   
if(currentIndex<questions.length){
    handleNextBtn();
}
else{
    startQuiz();
}

}

startQuiz();



function start(){
    let name= document.getElementById('name').value;
    document.getElementById('userName').innerHTML= name;
    hide();
}

function hide(){
    let element=document.getElementById('startScreen');
    element.style.display="none";
    all.style.display="block";
}
const all=document.getElementById('containerAll');
all.style.display="none";
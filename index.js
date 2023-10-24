const questions=[
    {
        question:"What is the oldest of the Vedas, consisting of hymns dedicated to various deities?",
        answers:
        [
            {text:"Rigveda",correct:true},
            {text:"Yajurveda",correct:false},
            {text:"samaveda",correct:false},
            {text:"Atharveda",correct:false},
        ]

    }, 
    {
        question: "Who is considered the compiler of the Vedas, dividing them into four distinct parts?",
        answers: [
          {"text": "Vyasa", "correct": true},
          {"text": "Valmiki", "correct": false},
          {"text": "Ravana", "correct": false},
          {"text": "Arjuna", "correct": false},
        ]
      }, 
      {
        question: "In which period of ancient Indian history were the Vedas composed?",
        answers: [
          {"text": "Indus Valley Civilization", "correct": false},
          {"text": "Vedic Period", "correct": true},
          {"text": "Maurya Empire", "correct": false},
          {"text": "Gupta Empire", "correct": false},
        ]
      },
      {
        question: "Which Veda primarily consists of prose passages and is concerned with rituals and ceremonies?",
        answers: [
          {"text": "Rigveda", "correct": false},
          {"text": "Yajurveda", "correct": true},
          {"text": "Samaveda", "correct": false},
          {"text": "Atharveda", "correct": false},
        ]
      },
      {
        question: "The Upanishads, philosophical texts that explore the nature of reality and the self, are also known as:",
        answers: [
          {"text": "Puranas", "correct": false},
          {"text": "Smriti", "correct": false},
          {"text": "Aranyakas", "correct": false},
          {"text": "Vedanta", "correct": true},
        ]
      },
      {
        question: "Who are the seven sages, or rishis, to whom some Vedic hymns are attributed?",
        answers: [
          {"text": "Agastya, Durvasa, Bharadwaja, Gautama, Kashyapa, Vasishtha, Atri", "correct": true},
          {"text": "Valmiki, Tulsidas, Kalidasa, Bhasa, Bhavabhuti, Visakhadatta, Bana", "correct": false},
          {"text": "Kalidasa, Tulsidas, Bhasa, Bhavabhuti, Valmiki, Visakhadatta, Bana", "correct": false},
          {"text": "Agastya, Durvasa, Kalidasa, Tulsidas, Valmiki, Visakhadatta, Bana", "correct": false},
        ]
      },
      {
        question: "What is the sacred syllable or sound often associated with the concept of the ultimate reality in Hinduism?",
        answers: [
          {"text": "Om", "correct": true},
          {"text": "Shanti", "correct": false},
          {"text": "Karma", "correct": false},
          {"text": "Dharma", "correct": false},
        ]
      },
      {
        question: "Which ancient scripture contains a collection of hymns, rituals, and mantras used in Vedic ceremonies?",
        answers: [
          {"text": "Upanishads", "correct": false},
          {"text": "Puranas", "correct": false},
          {"text": "Ramayana", "correct": false},
          {"text": "Brahmanas", "correct": true},
        ]
      },
      {
        question: "The end of the Vedic period saw the composition of the two Indian epics, the Mahabharata and the:",
        answers: [
          {"text": "Ramayana", "correct": true},
          {"text": "Bhagavad Gita", "correct": false},
          {"text": "Puranas", "correct": false},
          {"text": "Upanishads", "correct": false},
        ]
      },
      {
        question: "Which Veda is known for its emphasis on music and melody and is often associated with the singing of hymns?",
        answers: [
          {"text": "Rigveda", "correct": false},
          {"text": "Yajurveda", "correct": false},
          {"text": "Samaveda", "correct": true},
          {"text": "Atharveda", "correct": false},
        ]
      }
    ];
const questionElement=document.getElementById("question");
const  answerButton=document.getElementById("answerButton");
const  nextBtn=document.getElementById("next");
let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextBtn.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;
    resetState();
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerText=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextBtn.style.display="none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");

        }
        button.disabled=true;
    });
    nextBtn.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score}/${questions.length}`;
    nextBtn.innerHTML="Play Again";
    nextBtn.style.display="block";
}

function handleNextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextBtn();  
    }
    else{
        startQuiz();
    }
})

startQuiz();
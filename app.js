var  questionsArray = [
    {
        
        question : "What does CSS stand for?",
        answer:"Cascading Style Sheets",
        options : [
             "Colorful Style Style Sheet",
             "Creative Style Sheet",
             "Computer Style Sheet",
             "Cascading Style Sheets",
        ]
        
    },
    {
        
        question : "What does HTML stand for?",
        answer:"Hyper Text Markup Language",
        options : [
             "Hyper Text Markup Language",
             "Home Tool Markup Language",
             "Hyperlinks and Text Markup Language",
             "Cascading Style Sheets"
        ]    
    },
    {
        
        question : "Where in an HTML document is the correct place to refer to an external style sheet",
        answer:"in the head",
        options : [
             "At the end of the document",
             "in the body section",
             "in the head",
             "both"
        ]
    },
    
    {
        
        question : "Which HTML attribute is used to define inline styles?",
        answer:"style",
        options : [
             "font",
             "class",
             "styles",
             "style"
        ]
        
    },
    {
        
        question : "Which property is used to change the background color?",
        answer:"<background-color",
        options : [
             "background-color",
             "color",
             "bgcolor",
             "bg-color"
        ]
        
    }

];

function showQuestion(e){
    //show question
    var questionElement = document.getElementById("questionElement");
    questionElement.innerHTML = questionsArray[e].question;

    //show option
    var optionElement = document.getElementsByClassName("optionElement");
   
     for (var i = 0; i < optionElement.length; i++){
         optionElement[i].innerHTML = questionsArray[e].options[i]
     }
}

var questionCount = 0;
var score = 0;

function nextQuestion(){
    questionCount++;
    //validate(questionCount)
    showQuestion(questionCount)
   //removeActive()
    
}

// function active(e){
//     removeActive()
//     e.classList.add("active")
// }
// function removeActive(){
//     var active = document.getElementsByClassName("active")
//     for(var i = 0; i < active.length; i++){
//         active[i].classList.remove("active")
//     }
// }

// function validate(e){
//     var active = document.getElementsByClassName("active")
//     if(active[0].innerHTML == questionsArray[e].answer)
//     score += 10
//     console.log(score);
// }

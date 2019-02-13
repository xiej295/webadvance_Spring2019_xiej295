window.onload = function () {

  var a = 0;
  var b = 0;
  var c = 0;
  var result;

  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,

     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        'Do I have any class tomorrow morning?' : ['Yes', 'No', 0, 1],

        'Do I have any homework which is due tomorrow?' : ['Yes', 'No', 0, 1],

        'Do I have any other appointment tomorrow' : ['Yes', 'No', 0, 1]
      };




  function loadQuestion(curr) {
  // This function loads all the question into the questionArea
  // It grabs the current question based on the 'current'-variable

    var question = Object.keys(allQuestions)[curr];

    questionArea.innerHTML = '';
    questionArea.innerHTML = question;
  }




  function loadAnswers(curr) {
  // This function loads all the possible answers of the given question
  // It grabs the needed answer-array with the help of the current-variable
  // Every answer is added with an 'onclick'-function

    var answers = allQuestions[Object.keys(allQuestions)[curr]];

    answerArea.innerHTML = '';

    for (var i = 0; i < answers.length - 2; i += 1) {
      var createDiv = document.createElement('div'),
          text = document.createTextNode(answers[i]);

      createDiv.appendChild(text);
      createDiv.addEventListener("click", checkAnswer(i, answers));


      answerArea.appendChild(createDiv);
    }
  }




  function checkAnswer(i, arr) {
    // This is the function that will run, when clicked on one of the answers
    // Check if givenAnswer is sams as the correct one
    // After this, check if it's the last question:
    // If it is: empty the answerArea and let them know it's done.

    return function () {
      //var arrayresult = [0, 0, 0];

      var givenAnswer = i,
          AnswerYes = arr[arr.length-2];
          AnswerNo = arr[arr.length-1]

      // var a = 0;
      // var b = 0;
      // var c = 0;
      // var d = 0;
      // var e = 0;
      // var f = 0;

      if (givenAnswer === AnswerYes) {
        addChecker(true);
      } else {
        addChecker(false);
      }

      if (current < Object.keys(allQuestions).length -1) {
        current += 1;

        loadQuestion(current);
        loadAnswers(current);
        document.getElementById("head").innerHTML = result;

      } else {
        questionArea.innerHTML = 'Done';
        answerArea.innerHTML = '';
        document.getElementById("head").innerHTML = result;

      }

    };
  }

  function addChecker(bool) {
  // This function adds a div element to the page
  // Used to see if it was correct or false

    var createDiv = document.createElement('div'),
        txt       = document.createTextNode(current + 1);
        num       = current + 1;


    createDiv.appendChild(txt);

    if (bool) {

      createDiv.className += 'correct';
      checker.appendChild(createDiv);
       if (num === 1){
         a = 1;
         //console.log(num);
       }if (num === 2){
         b = 1;
       }if (num === 3){
         c = 1;
       }
    } else {
      createDiv.className += 'false';
      checker.appendChild(createDiv);
      if (num === 1){
         a = 2;
      }if (num === 2){
         b = 2;
      }if (num === 3){
         c = 2;
     }
    }
    if (a===1){
      result = 'The alarm clock is set at 7:30AM';
    }else if ((a===2) & (b===1) & (c===1)){
      result = 'The alarm clock is set at 8:30AM';
    }else if ((a===2) & (b===1) & (c===2)){
      result = 'The alarm clock is set at 8:30AM';
    }else if ((a===2) & (b===2) & (c===1)){
      result = 'The alarm clock is set according to the schedule';
    }else if ((a===2) & (b===2) & (c===2)){
      result = 'Do not have to set an alarm clock';
    }else{
      result = 'Please answer more questions';
    }

     console.log(a);
     console.log(b);
     console.log(c);
     console.log(result);

  }


  // Start the quiz right away
  loadQuestion(current);
  loadAnswers(current);

};

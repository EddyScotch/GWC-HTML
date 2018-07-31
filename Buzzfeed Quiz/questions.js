/* Buzzfeed Quiz
Create a Buzzfeed Quiz with 5 questions. Create a method for determining what
the results will be. Combine our knowledge of HTML, JS, and CSS to get hired at
Buzzfeed.
1. Finish the function 'creatQuestions'
  a. Make sure you have a list of dictionary of questions
  b. Create the questions and options (aka the radio buttons) DYNAMICALLY
  in JavaScript. In other words, don't hard code the questions; we want to use
  code to access our list of dictionary of questions.
      (HINT 1: HTML is just a bunch of STRINGS. Create HTML code with JS by
      creating strings with tags i.e. ('<input type="radio" name="group" value ="asdf"'))
      (HINT 2: Group the radio button inputs for each question using the SAME name
       or class)
  c. Make sure our changes are reflected in the HTML
      (HINT: getElementById and change its innerHTML)
  d. Call this function WHEN THE PAGE LOADS!!!!
      (HINT: wrap the function in paranthesis like in Overwatch Hero workshop)
2. Define the function 'submitAnswer'
  a. We want to iterate through each group of questions to see what the user
  selected.
  (HINT: a selected answer is "checked"; look up checked radio button)
  b. Determine how your Buzzfeed personality is predicted
      ideas (easy): Assign points to each of your option. If an option makes the
      user a Broccoli, assign a low point (0,1). If an option makes the user a Carrot,
      assign medium high points (4,5). If an option makes the user a Celery,
      assign high points (10). All numbers selected are arbitrary; you decide.
          0-15 points = Broccoli
          16-30 points = Carrot
          30-45 points = Celerey
      ideas (medium):
          Determine which value was selected the MAXIMUM times
          Need to handle TIES.
3. Make more questions, add CSS, add images, use BootStrap
*/
(function tbell(){

  /*TODO: ADD MORE QUESTIONS. Create a field for images*/

  var questions = [
    {
      "question": "What is your favorite primary color?",
      "name": "color",
      "answers" : {
        "Blue": 0,
        "Red": 0,
        "Yellow": 0
      }
    },
    {
      "question": "Are you wearing a black shirt?",
      "name": "wear",
      "answers" : {
        "Yes": 0,
        "No": 0,
        "I'm not wearing a shirt": 0
      }
    },
    {
      "question": "Do you like dogs or cats?",
      "name": "dog",
      "answers" : {
        "Dogs": 0,
        "Cats": 0,
        "Neither": 0
      }
    },
    {
      "question": "Beep?",
      "name": "beep",
      "answers" : {
        "Boop": 0,
        "Beep": 0,
        "Beep Boop": 0
      }
    },
    {
      "question": "Knock knock",
      "name": "knock",
      "answers" : {
        "Who's there": 0,
        "Go away": 0,
        "*silence*": 0
      }
    },
    {
      "question": "Do you believe in online quizzes",
      "name": "quiz",
      "answers" : {
        "Yes": 1,
        "No": 1,
        "uwu": 2
      }
    }
  ];

  var html = "";
  for (var i = 0; i < questions.length; i++){
    html += questions[i]["question"] + "<br>";
    for (var key in questions[i]["answers"]){
      html += '<input type="radio" name="' + questions[i]["name"] + '" value="';
      html += questions[i]["answers"][key] + '">' + key + "<br>";
    }
  }
  document.getElementById("quiz").innerHTML = html;

})();

function tbell(){
  var total = 0;
  var categories = ["color", "dog", "quiz", "knock", "wear", "beep"];

  var score = {
    "-Insert generic quiz result-": 1,
    "~uwu uwu uwu uwu uwu": 2
}}

  var win_game;
  var win_score = 0;

  for (var key in score){
    if (score[key] > win_score){
      win_score = score[key];
      win_game = key;
    }}

  alert(win_game);

  for(var i = 0; i <catagories.length; i++){
    document.getElementByName(categories[i]);
  }

document.getElementById("results").innerHTML = "score";

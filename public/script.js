const TRIVIA_API_URL = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple';
const PANTRY_API_URL = 'https://pantry-proxy-api-omega.vercel.app/quiz-scores';

const quiz = document.getElementById('quiz-box');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const timerDisplay = document.getElementById('time-left');
const choicesContainer = document.getElementById('choices-container');
const nextBtn = document.getElementById('next-btn');
const loader = document.getElementById('loader');
const highScoreContainer = document.getElementById('high-score-container');
const highScoreList = document.getElementById('high-score-list');
const playAgainBtn = document.getElementById('play-again-btn');

let currentQuestion = 0;
let questions = [];

// Fetch Questions
async function fetchQuestions() {
          try {
                    const response = await fetch(TRIVIA_API_URL);
                    const data = await response.json();
                    questions = data.results;
                    loadQuestion();
          } catch (error) {
                    console.error('Error fetching questions:', error);
                    questionText.innerText = 'Failed to load questions. Please try again later.'
          }
}

// Load each question to UI
function loadQuestion() {
          const question = questions[currentQuestion];
          questionText.innerText = question.question;
          questionNumber.innerText = `Question ${currentQuestion + 1}`;

          // Reset choices
          choicesContainer.innerText = '';
          // nextBtn.disabled = true;

          //Prepare choices
          const choices = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);
          choices.forEach(choice => {
                    const button = document.createElement('button');
                    button.type = 'button';
                    button.classList.add('choice');
                    button.innerText = choice;
                    choicesContainer.appendChild(button);
          });
}

// Load next question
nextBtn.addEventListener('click', () => {
          currentQuestion++;
          loadQuestion();
})

// Startup
fetchQuestions();
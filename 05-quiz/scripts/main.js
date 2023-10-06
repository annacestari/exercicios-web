const questions = [
  {
    image: 'assets/charmander.png',
    answers: [
      { name: 'Eevee', image: 'assets/eevee.png' },
      { name: 'Charmander', image: 'assets/charmander.png' },
      { name: 'Garchomp', image: 'assets/garchomp.png' },
    ],
    valid_answer: 0,
  },
  {
    image: 'assets/mewtwo.png',
    answers: [
      {
        name: 'Ditto',
        image: 'assets/ditto.png',
      },
      {
        name: 'Lucario',
        image: 'assets/lucario.png',
      },
      {
        name: 'MewTwo',
        image: 'assets/mewtwo.png',
      },
    ],
    valid_answer: 2,
  },
  {
    image: 'assets/squirtle.png',
    answers: [
      {
        name: 'Gardevoir',
        image: 'assets/gardevoir.png',
      },
      {
        name: 'Squirtle',
        image: 'assets/squirtle.png',
      },
      {
        name: 'Piplup',
        image: 'assets/piplup.png',
      },
    ],
    valid_answer: 1,
  },
  {
    image: 'assets/pikachu.png',
    answers: [
      {
        name: 'Pikachu',
        image: 'assets/pikachu.png',
      },
      {
        name: 'Dialga',
        image: 'assets/dialga.png',
      },
      {
        name: 'Bulbasaur',
        image: 'assets/bulbasaur.png',
      },
    ],
    valid_answer: 0,
  },
];

const quizWrapper = document.getElementById('quiz');
const resultsWrapper = document.getElementById('results');
const submitButton = document.getElementById('submit');

document.addEventListener('DOMContentLoaded', () => {
  let output = [];
  let answers = [];

  for (let i = 0; i < questions.length; i++) {
    answers = [];

    for (pokemon in questions[i].answers) {
      answers.push(
        `<label><input type="radio" name="question-${i}" value="${pokemon}"><img src="${questions[i].answers[pokemon].image}" width="49" height="49" /> </label>`
      );
    }

    let question = `<div class="question">Which of these pokemon is ${
      questions[i].answers[questions[i].valid_answer].name
    }?</div><div class="answers">${answers.join('')}</div>`;
    output.push(question);
  }

  quizWrapper.innerHTML = output.join('');
});

submitButton.addEventListener('click', () => {
  const answerContainers = quizWrapper.querySelectorAll('.answers');

  let playerAnswer = null;
  let correctAnswers = 0;

  for (let i = 0; i < questions.length; i++) {
    playerAnswer = Number(
      (
        answerContainers[i].querySelector(
          'input[name=question-' + i + ']:checked'
        ) || {}
      ).value
    );

    const validAnswer = questions[i].valid_answer;
    if (playerAnswer === validAnswer) {
      correctAnswers++;

      answerContainers[i].style.backgroundColor = 'lightgreen';
    } else {
      answerContainers[i].style.backgroundColor = 'lightcoral';
    }
  }

  const totalQuestions = questions.length;
  resultsWrapper.innerHTML = `Correct answers: ${correctAnswers}/${totalQuestions}`;
});

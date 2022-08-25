const scoreForm = document.querySelector('.score-form');

class ScoreItems {
  static Arr = [];

  constructor(user, score) {
    this.user = user;
    this.score = score;
  }
}

// GET: Get a list of scores for the given game
const refreshScoreBoard = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fFC8bUMLOgFAV1KQTW8D/scores/',
  ).then((response) => response.json().then((data) => {
    const scoreBoard = document.querySelector('.scores');
    scoreBoard.innerHTML = '';
    let board = '';

    const fetchedData = data.result;
    fetchedData.forEach((i) => {
      board += `<li><p>${i.user}: ${i.score}</p></li>`;
    });
    scoreBoard.innerHTML = board;
  }));
};

// POST: Post a new Score for the given game
const addScore = async (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  const newScoreItems = new ScoreItems(nameInput.value, scoreInput.value);
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fFC8bUMLOgFAV1KQTW8D/scores/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newScoreItems),
    },
  ).then((response) => response.json().then((data) => data.result));
  nameInput.value = '';
  scoreInput.value = '';
};

scoreForm.addEventListener('submit', addScore);

export default refreshScoreBoard;
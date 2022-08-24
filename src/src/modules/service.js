
const addInput = document.querySelector('.add-input')

class ScoreObject {
  static scoreArr = [];

  constructor(user, score) {
    this.user = user;
    this.score = score;
  }
}

// GET: Get a list of scores for the given game
const refreshScore = async () => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:21NmC1BS15mBknEtb3JB/scores/').then((res) => res.json().then((data) => {
    const scoreChart = document.querySelector('.scores');
    scoreChart.innerHTML = '';
    let chart = '';

    let fetched = data.result
    fetched.forEach((score) => {
      chart += `<li><p>${score.user}: ${score.score}</p></li>`;
    });
    scoreChart.innerHTML = chart;
  }));
};


// POST: Post a new Score for the given game
const addPost = async (e) => {
  e.preventDefault()
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  const newScoreObject = new ScoreObject(name.value, score.value);
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:21NmC1BS15mBknEtb3JB/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newScoreObject),
  }).then((res) => res.json().then((data) => data.result));
  name.value = '';
  score.value = '';
};


addInput.addEventListener('submit', addPost)

export {  refreshScore };


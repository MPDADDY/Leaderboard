import {
  getScores,
  addScore,
  initializeGameId,
} from './myApp.js';

const API_BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const scoresArticle = document.getElementById('leaderboard');
const myStatus = document.getElementById('message');

const renderScores = async () => {
  try {
    const gameId = await initializeGameId(API_BASE_URL, 'leaderboard');
    const scores = await getScores(API_BASE_URL, gameId);

    if (scores.length > 0) {
      scoresArticle.innerHTML = '';
      scores.forEach((score, index) => {
        const scoreItem = document.createElement('p');
        scoreItem.textContent = `${score.user}: ${score.score}`;
        scoreItem.classList.add('list');
        if (index % 2 === 0) {
          scoreItem.classList.add('even-bg');
        } else {
          scoreItem.classList.add('odd-bg');
        }
        scoresArticle.appendChild(scoreItem);
      });
    } else {
      scoresArticle.innerHTML = `<div class="empty-warning">
        <h2>Add new scores</h2>
      </div>`;
    }
  } catch (error) {
    myStatus.textContent = `${error}: Check your Internet`;
  }
};

const handleSubmission = async (e) => {
  e.preventDefault();
  const submitButton = e.target;

  if (submitButton.id === 'submit') {
    myStatus.textContent = 'Submitting...';
    myStatus.classList.remove('hidden');

    const nameInput = document.getElementById('name');
    const scoreInput = document.getElementById('score');
    const name = nameInput.value.trim();
    const score = parseFloat(scoreInput.value);

    if (name && !Number.isNaN(score)) {
      try {
        const gameId = await initializeGameId(API_BASE_URL, 'leaderboard');
        const result = await addScore(API_BASE_URL, gameId, name, score);
        renderScores();
        myStatus.textContent = result;
        myStatus.className = 'success';
        nameInput.value = '';
        scoreInput.value = '';
      } catch (error) {
        myStatus.className = 'error';
        myStatus.textContent = `${error}: Check your Internet`;
      }

      setTimeout(() => {
        myStatus.className = 'hide';
      }, 3000);
    }
  } else if (submitButton.id === 'refresh') {
    window.location.reload();
  }
};

export { renderScores, handleSubmission };

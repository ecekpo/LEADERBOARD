// eslint-disable-next-line no-unused-vars
import style from './styles/style.css';
import refreshScoreBoard from './modules/gameboard.js';

const refreshBtn = document.querySelector('.refresh');

refreshBtn.addEventListener('click', () => {
  refreshScoreBoard();
});
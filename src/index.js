import style from './styles/style.css'
import refreshScoreBoard from "./modules/gameboard";

const refreshBtn = document.querySelector('.refresh');

refreshBtn.addEventListener('click', () => {
  refreshScoreBoard();
});
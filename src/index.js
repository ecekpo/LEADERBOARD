import './styles/style.css'

import {  refreshScore } from './modules/service.js';


const refresh = document.querySelector('.refresh')


refresh.addEventListener('click', ()=>{
  refreshScore()

})


import './style.css';
import {renderScores, handleSubmission} from './modules/render.js';

const initializeApp = () => {
  document.addEventListener('click', handleSubmission);
  renderScores();
};

window.addEventListener('DOMContentLoaded', initializeApp);
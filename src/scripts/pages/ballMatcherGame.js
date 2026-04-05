// src/scripts/pages/ballMatcherGame.js
import { renderMenu } from "../utils/renderMenu.js";
import { renderIframe } from "../utils/renderIframe.js";
export function renderBallMatcherGame() {
  return `
    <h1 data-aos="fade-up">Ball Matcher Game Project</h1>
    ${renderMenu()}
    <article>
      <p data-aos="fade-up">Assignment: Create a game using JavaScript and HTML canvas.</p>
      <hr>
      <p data-aos="zoom-in">Description of the Ball Matcher Game goes here. Explain the gameplay, controls, and what makes it fun.</p>
      ${renderIframe(
        "https://iacs-cs.github.io/list-canvas-game-ball-matcher/",
        "Ball Matcher Game",
      )}
    
      </article>
  `;
}

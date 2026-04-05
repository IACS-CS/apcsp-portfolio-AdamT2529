// src/scripts/pages/ballMatcherGame.js
import { renderMenu } from "../utils/renderMenu.js";
import { renderIframe } from "../utils/renderIframe.js";
export function renderBallMatcherGame() {
  return `
    <h1 data-aos="fade-up">Ball Matcher Game Project</h1>
    ${renderMenu()}
    <article>
      <p data-aos="fade-up">Assignment: Create a game using JavaScript iteration and lists.</p>
      <hr>
      <p data-aos="zoom-in">So I took inspiration from my canvas game but this is way better and I am proud of that. This game I applied lists and for loops which were new concepts I learned at the time. I used lists to create the balls and for loops to make the specificied amount of balls. The game adds velocity so the balls always move and bounce off walls just like the canvas game. There is a clicking element where when you click the balls it turns blue and you have to make all the balls blue matching it and winning the game. I was able to not use html this time by using javascript to make text and a restart button sort of as in a restart key on the keyboard to restart the game. There was a timer that kept going and you would always try to match the balls the quickest. This is one of my favorite projects that I was able to understand and expand on from my previous project.</p>
      ${renderIframe(
        "https://iacs-cs.github.io/list-canvas-game-ball-matcher/",
        "Ball Matcher Game",
      )}
    
      </article>
  `;
}

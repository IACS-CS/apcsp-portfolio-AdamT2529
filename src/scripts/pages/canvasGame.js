import { renderMenu } from "../utils/renderMenu";
import { renderIframe } from "../utils/renderIframe";
export function renderCanvasGame() {
  /* html */
  return `
    <h1 data-aos="fade-up">Canvas Game Project</h1>
    ${renderMenu()}
    <article>
      <p data-aos="fade-up">Assignment: Create a game using the HTML canvas element and JavaScript</p>
      <hr>
      <p data-aos="zoom-in">This game is basically reverse pong. You move a paddle to hit a ball that is moving around to try to catch it and you win. This was pretty complicated for me as I had to use html to make the buttons like why cant you do that in regular javascript so I had a bunch of code I didnt really understand but this porjetc was still good I learned to be able to draw shapes on a canvas the circle and paddle with colors and added working movement controls of the paddle with arrow keys. Overall it was a good starter but I didnt really understand it. As you can tell there are a bunch of bugs in the game. The restart button is always there just invisible meaning if u clikc the middle of the screen the game restarts. You can move paddle even though the game is over and every time the game restarts the paddle get faster. Overall it was a mess.</p>
      ${renderIframe(
        "https://iacs-cs.github.io/simple-canvas-game-ada/",
        "Canvas Game",
      )} 
    </article>
  `;
}
